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
import { GlapTemplateDetailController } from "../glapTemplateDetail.controller";
import { GlapTemplateDetailService } from "../glapTemplateDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  camount: 42.42,
  dpercent: 42.42,
  dretention: 42.42,
  hacct: 42,
  hcategory: 42,
  hcontract: 42,
  hcostcode: 42,
  hglaptemplate: 42,
  hjob: 42,
  hproperty: 42,
  hvattrantype: 42,
  id: 42,
  snotes: "exampleSnotes",
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
};
const CREATE_RESULT = {
  camount: 42.42,
  dpercent: 42.42,
  dretention: 42.42,
  hacct: 42,
  hcategory: 42,
  hcontract: 42,
  hcostcode: 42,
  hglaptemplate: 42,
  hjob: 42,
  hproperty: 42,
  hvattrantype: 42,
  id: 42,
  snotes: "exampleSnotes",
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
};
const FIND_MANY_RESULT = [
  {
    camount: 42.42,
    dpercent: 42.42,
    dretention: 42.42,
    hacct: 42,
    hcategory: 42,
    hcontract: 42,
    hcostcode: 42,
    hglaptemplate: 42,
    hjob: 42,
    hproperty: 42,
    hvattrantype: 42,
    id: 42,
    snotes: "exampleSnotes",
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
  },
];
const FIND_ONE_RESULT = {
  camount: 42.42,
  dpercent: 42.42,
  dretention: 42.42,
  hacct: 42,
  hcategory: 42,
  hcontract: 42,
  hcostcode: 42,
  hglaptemplate: 42,
  hjob: 42,
  hproperty: 42,
  hvattrantype: 42,
  id: 42,
  snotes: "exampleSnotes",
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

describe("GlapTemplateDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GlapTemplateDetailService,
          useValue: service,
        },
      ],
      controllers: [GlapTemplateDetailController],
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

  test("POST /glapTemplateDetails", async () => {
    await request(app.getHttpServer())
      .post("/glapTemplateDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /glapTemplateDetails", async () => {
    await request(app.getHttpServer())
      .get("/glapTemplateDetails")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /glapTemplateDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glapTemplateDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /glapTemplateDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glapTemplateDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /glapTemplateDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/glapTemplateDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/glapTemplateDetails")
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
