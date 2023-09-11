import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { GlAllocateHistoryController } from "../glAllocateHistory.controller";
import { GlAllocateHistoryService } from "../glAllocateHistory.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  hacct: 42,
  hbatch: 42242424,
  hje: 42242424,
  hppty: 42,
  ibook: 42,
  id: 42,
  sbegin: 42.42,
  sbeginbudget: 42.42,
  sbudget: 42.42,
  smtd: 42.42,
  ssegment1: "exampleSsegment1",
  ssegment10: "exampleSsegment10",
  ssegment11: "exampleSsegment11",
  ssegment12: "exampleSsegment12",
  ssegment2: "exampleSsegment2",
  ssegment3: "exampleSsegment3",
  ssegment4: "exampleSsegment4",
  ssegment5: "exampleSsegment5",
  ssegment6: "exampleSsegment6",
  ssegment7: "exampleSsegment7",
  ssegment8: "exampleSsegment8",
  ssegment9: "exampleSsegment9",
  umonth: new Date(),
};
const CREATE_RESULT = {
  hacct: 42,
  hbatch: 42242424,
  hje: 42242424,
  hppty: 42,
  ibook: 42,
  id: 42,
  sbegin: 42.42,
  sbeginbudget: 42.42,
  sbudget: 42.42,
  smtd: 42.42,
  ssegment1: "exampleSsegment1",
  ssegment10: "exampleSsegment10",
  ssegment11: "exampleSsegment11",
  ssegment12: "exampleSsegment12",
  ssegment2: "exampleSsegment2",
  ssegment3: "exampleSsegment3",
  ssegment4: "exampleSsegment4",
  ssegment5: "exampleSsegment5",
  ssegment6: "exampleSsegment6",
  ssegment7: "exampleSsegment7",
  ssegment8: "exampleSsegment8",
  ssegment9: "exampleSsegment9",
  umonth: new Date(),
};
const FIND_MANY_RESULT = [
  {
    hacct: 42,
    hbatch: 42242424,
    hje: 42242424,
    hppty: 42,
    ibook: 42,
    id: 42,
    sbegin: 42.42,
    sbeginbudget: 42.42,
    sbudget: 42.42,
    smtd: 42.42,
    ssegment1: "exampleSsegment1",
    ssegment10: "exampleSsegment10",
    ssegment11: "exampleSsegment11",
    ssegment12: "exampleSsegment12",
    ssegment2: "exampleSsegment2",
    ssegment3: "exampleSsegment3",
    ssegment4: "exampleSsegment4",
    ssegment5: "exampleSsegment5",
    ssegment6: "exampleSsegment6",
    ssegment7: "exampleSsegment7",
    ssegment8: "exampleSsegment8",
    ssegment9: "exampleSsegment9",
    umonth: new Date(),
  },
];
const FIND_ONE_RESULT = {
  hacct: 42,
  hbatch: 42242424,
  hje: 42242424,
  hppty: 42,
  ibook: 42,
  id: 42,
  sbegin: 42.42,
  sbeginbudget: 42.42,
  sbudget: 42.42,
  smtd: 42.42,
  ssegment1: "exampleSsegment1",
  ssegment10: "exampleSsegment10",
  ssegment11: "exampleSsegment11",
  ssegment12: "exampleSsegment12",
  ssegment2: "exampleSsegment2",
  ssegment3: "exampleSsegment3",
  ssegment4: "exampleSsegment4",
  ssegment5: "exampleSsegment5",
  ssegment6: "exampleSsegment6",
  ssegment7: "exampleSsegment7",
  ssegment8: "exampleSsegment8",
  ssegment9: "exampleSsegment9",
  umonth: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("GlAllocateHistory", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GlAllocateHistoryService,
          useValue: service,
        },
      ],
      controllers: [GlAllocateHistoryController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /glAllocateHistories", async () => {
    await request(app.getHttpServer())
      .post("/glAllocateHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        umonth: CREATE_RESULT.umonth.toISOString(),
      });
  });

  test("GET /glAllocateHistories", async () => {
    await request(app.getHttpServer())
      .get("/glAllocateHistories")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          umonth: FIND_MANY_RESULT[0].umonth.toISOString(),
        },
      ]);
  });

  test("GET /glAllocateHistories/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glAllocateHistories"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /glAllocateHistories/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glAllocateHistories"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        umonth: FIND_ONE_RESULT.umonth.toISOString(),
      });
  });

  test("POST /glAllocateHistories existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/glAllocateHistories")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        umonth: CREATE_RESULT.umonth.toISOString(),
      })
      .then(function () {
        agent
          .post("/glAllocateHistories")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
