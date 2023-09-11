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
import { GlAllocateDetailController } from "../glAllocateDetail.controller";
import { GlAllocateDetailService } from "../glAllocateDetail.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  dfactor: 42.42,
  hacct: 42,
  haccttreedetail: 42,
  hfromacct: 42242424,
  hglallocate: 42,
  hoffsetacct: 42,
  ibudget: 42242424,
  id: 42,
  iexclude: 42,
  igroup: 42242424,
  inegate: 42,
  iorder: 42242424,
  iptd: 42,
  sacctdescription: "exampleSacctdescription",
  sacctnode: "exampleSacctnode",
  sbook: "exampleSbook",
  scalctype: "exampleScalctype",
  sformula: "exampleSformula",
  snotes: "exampleSnotes",
  spropertylist: "exampleSpropertylist",
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
  stocolumnname: "exampleStocolumnname",
  stype: "exampleStype",
};
const CREATE_RESULT = {
  dfactor: 42.42,
  hacct: 42,
  haccttreedetail: 42,
  hfromacct: 42242424,
  hglallocate: 42,
  hoffsetacct: 42,
  ibudget: 42242424,
  id: 42,
  iexclude: 42,
  igroup: 42242424,
  inegate: 42,
  iorder: 42242424,
  iptd: 42,
  sacctdescription: "exampleSacctdescription",
  sacctnode: "exampleSacctnode",
  sbook: "exampleSbook",
  scalctype: "exampleScalctype",
  sformula: "exampleSformula",
  snotes: "exampleSnotes",
  spropertylist: "exampleSpropertylist",
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
  stocolumnname: "exampleStocolumnname",
  stype: "exampleStype",
};
const FIND_MANY_RESULT = [
  {
    dfactor: 42.42,
    hacct: 42,
    haccttreedetail: 42,
    hfromacct: 42242424,
    hglallocate: 42,
    hoffsetacct: 42,
    ibudget: 42242424,
    id: 42,
    iexclude: 42,
    igroup: 42242424,
    inegate: 42,
    iorder: 42242424,
    iptd: 42,
    sacctdescription: "exampleSacctdescription",
    sacctnode: "exampleSacctnode",
    sbook: "exampleSbook",
    scalctype: "exampleScalctype",
    sformula: "exampleSformula",
    snotes: "exampleSnotes",
    spropertylist: "exampleSpropertylist",
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
    stocolumnname: "exampleStocolumnname",
    stype: "exampleStype",
  },
];
const FIND_ONE_RESULT = {
  dfactor: 42.42,
  hacct: 42,
  haccttreedetail: 42,
  hfromacct: 42242424,
  hglallocate: 42,
  hoffsetacct: 42,
  ibudget: 42242424,
  id: 42,
  iexclude: 42,
  igroup: 42242424,
  inegate: 42,
  iorder: 42242424,
  iptd: 42,
  sacctdescription: "exampleSacctdescription",
  sacctnode: "exampleSacctnode",
  sbook: "exampleSbook",
  scalctype: "exampleScalctype",
  sformula: "exampleSformula",
  snotes: "exampleSnotes",
  spropertylist: "exampleSpropertylist",
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
  stocolumnname: "exampleStocolumnname",
  stype: "exampleStype",
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

describe("GlAllocateDetail", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GlAllocateDetailService,
          useValue: service,
        },
      ],
      controllers: [GlAllocateDetailController],
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

  test("POST /glAllocateDetails", async () => {
    await request(app.getHttpServer())
      .post("/glAllocateDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /glAllocateDetails", async () => {
    await request(app.getHttpServer())
      .get("/glAllocateDetails")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /glAllocateDetails/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glAllocateDetails"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /glAllocateDetails/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glAllocateDetails"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /glAllocateDetails existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/glAllocateDetails")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/glAllocateDetails")
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
