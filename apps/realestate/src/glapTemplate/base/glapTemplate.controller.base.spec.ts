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
import { GlapTemplateController } from "../glapTemplate.controller";
import { GlapTemplateService } from "../glapTemplate.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  binactive: 42,
  bvalid: 42,
  dtlastposted: new Date(),
  dtrangefrom: new Date(),
  dtrangeto: new Date(),
  haccrualacct: 42,
  hcompany: 42,
  hfunding: 42,
  hoffsetacct: 42,
  hperson: 42,
  iapr: 42,
  iaug: 42,
  id: 42,
  idec: 42,
  idisplaytype: 42,
  idueday: 42,
  ifeb: 42,
  ijan: 42,
  ijul: 42,
  ijun: 42,
  imar: 42,
  imay: 42,
  inov: 42,
  ioct: 42,
  irecurday: 42,
  isep: 42,
  istatus: 42,
  samount: 42,
  scode: "exampleScode",
  sdesc: "exampleSdesc",
  sexpensetype: "exampleSexpensetype",
  snotes: "exampleSnotes",
  spostcode: "exampleSpostcode",
};
const CREATE_RESULT = {
  binactive: 42,
  bvalid: 42,
  dtlastposted: new Date(),
  dtrangefrom: new Date(),
  dtrangeto: new Date(),
  haccrualacct: 42,
  hcompany: 42,
  hfunding: 42,
  hoffsetacct: 42,
  hperson: 42,
  iapr: 42,
  iaug: 42,
  id: 42,
  idec: 42,
  idisplaytype: 42,
  idueday: 42,
  ifeb: 42,
  ijan: 42,
  ijul: 42,
  ijun: 42,
  imar: 42,
  imay: 42,
  inov: 42,
  ioct: 42,
  irecurday: 42,
  isep: 42,
  istatus: 42,
  samount: 42,
  scode: "exampleScode",
  sdesc: "exampleSdesc",
  sexpensetype: "exampleSexpensetype",
  snotes: "exampleSnotes",
  spostcode: "exampleSpostcode",
};
const FIND_MANY_RESULT = [
  {
    binactive: 42,
    bvalid: 42,
    dtlastposted: new Date(),
    dtrangefrom: new Date(),
    dtrangeto: new Date(),
    haccrualacct: 42,
    hcompany: 42,
    hfunding: 42,
    hoffsetacct: 42,
    hperson: 42,
    iapr: 42,
    iaug: 42,
    id: 42,
    idec: 42,
    idisplaytype: 42,
    idueday: 42,
    ifeb: 42,
    ijan: 42,
    ijul: 42,
    ijun: 42,
    imar: 42,
    imay: 42,
    inov: 42,
    ioct: 42,
    irecurday: 42,
    isep: 42,
    istatus: 42,
    samount: 42,
    scode: "exampleScode",
    sdesc: "exampleSdesc",
    sexpensetype: "exampleSexpensetype",
    snotes: "exampleSnotes",
    spostcode: "exampleSpostcode",
  },
];
const FIND_ONE_RESULT = {
  binactive: 42,
  bvalid: 42,
  dtlastposted: new Date(),
  dtrangefrom: new Date(),
  dtrangeto: new Date(),
  haccrualacct: 42,
  hcompany: 42,
  hfunding: 42,
  hoffsetacct: 42,
  hperson: 42,
  iapr: 42,
  iaug: 42,
  id: 42,
  idec: 42,
  idisplaytype: 42,
  idueday: 42,
  ifeb: 42,
  ijan: 42,
  ijul: 42,
  ijun: 42,
  imar: 42,
  imay: 42,
  inov: 42,
  ioct: 42,
  irecurday: 42,
  isep: 42,
  istatus: 42,
  samount: 42,
  scode: "exampleScode",
  sdesc: "exampleSdesc",
  sexpensetype: "exampleSexpensetype",
  snotes: "exampleSnotes",
  spostcode: "exampleSpostcode",
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

describe("GlapTemplate", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GlapTemplateService,
          useValue: service,
        },
      ],
      controllers: [GlapTemplateController],
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

  test("POST /glapTemplates", async () => {
    await request(app.getHttpServer())
      .post("/glapTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dtlastposted: CREATE_RESULT.dtlastposted.toISOString(),
        dtrangefrom: CREATE_RESULT.dtrangefrom.toISOString(),
        dtrangeto: CREATE_RESULT.dtrangeto.toISOString(),
      });
  });

  test("GET /glapTemplates", async () => {
    await request(app.getHttpServer())
      .get("/glapTemplates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dtlastposted: FIND_MANY_RESULT[0].dtlastposted.toISOString(),
          dtrangefrom: FIND_MANY_RESULT[0].dtrangefrom.toISOString(),
          dtrangeto: FIND_MANY_RESULT[0].dtrangeto.toISOString(),
        },
      ]);
  });

  test("GET /glapTemplates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glapTemplates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /glapTemplates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/glapTemplates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dtlastposted: FIND_ONE_RESULT.dtlastposted.toISOString(),
        dtrangefrom: FIND_ONE_RESULT.dtrangefrom.toISOString(),
        dtrangeto: FIND_ONE_RESULT.dtrangeto.toISOString(),
      });
  });

  test("POST /glapTemplates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/glapTemplates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dtlastposted: CREATE_RESULT.dtlastposted.toISOString(),
        dtrangefrom: CREATE_RESULT.dtrangefrom.toISOString(),
        dtrangeto: CREATE_RESULT.dtrangeto.toISOString(),
      })
      .then(function () {
        agent
          .post("/glapTemplates")
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
