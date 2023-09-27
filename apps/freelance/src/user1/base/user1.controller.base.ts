/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { User1Service } from "../user1.service";
import { User1CreateInput } from "./User1CreateInput";
import { User1WhereInput } from "./User1WhereInput";
import { User1WhereUniqueInput } from "./User1WhereUniqueInput";
import { User1FindManyArgs } from "./User1FindManyArgs";
import { User1UpdateInput } from "./User1UpdateInput";
import { User1 } from "./User1";
import { BidFindManyArgs } from "../../bid/base/BidFindManyArgs";
import { Bid } from "../../bid/base/Bid";
import { BidWhereUniqueInput } from "../../bid/base/BidWhereUniqueInput";
import { JobFindManyArgs } from "../../job/base/JobFindManyArgs";
import { Job } from "../../job/base/Job";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";
import { SkillFindManyArgs } from "../../skill/base/SkillFindManyArgs";
import { Skill } from "../../skill/base/Skill";
import { SkillWhereUniqueInput } from "../../skill/base/SkillWhereUniqueInput";
import { TransactionFindManyArgs } from "../../transaction/base/TransactionFindManyArgs";
import { Transaction } from "../../transaction/base/Transaction";
import { TransactionWhereUniqueInput } from "../../transaction/base/TransactionWhereUniqueInput";

export class User1ControllerBase {
  constructor(protected readonly service: User1Service) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User1 })
  async create(@common.Body() data: User1CreateInput): Promise<User1> {
    return await this.service.create({
      data: data,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        location: true,
        password: true,
        profileImage: true,
        role: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User1] })
  @ApiNestedQuery(User1FindManyArgs)
  async findMany(@common.Req() request: Request): Promise<User1[]> {
    const args = plainToClass(User1FindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        location: true,
        password: true,
        profileImage: true,
        role: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: User1WhereUniqueInput
  ): Promise<User1 | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        bio: true,
        createdAt: true,
        email: true,
        id: true,
        location: true,
        password: true,
        profileImage: true,
        role: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() data: User1UpdateInput
  ): Promise<User1 | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          bio: true,
          createdAt: true,
          email: true,
          id: true,
          location: true,
          password: true,
          profileImage: true,
          role: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User1 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: User1WhereUniqueInput
  ): Promise<User1 | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bio: true,
          createdAt: true,
          email: true,
          id: true,
          location: true,
          password: true,
          profileImage: true,
          role: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/bids")
  @ApiNestedQuery(BidFindManyArgs)
  async findManyBids(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Bid[]> {
    const query = plainToClass(BidFindManyArgs, request.query);
    const results = await this.service.findBids(params.id, {
      ...query,
      select: {
        amount: true,
        createdAt: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        proposal: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bids")
  async connectBids(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bids")
  async updateBids(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bids")
  async disconnectBids(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: BidWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bids: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/jobs")
  @ApiNestedQuery(JobFindManyArgs)
  async findManyJobs(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Job[]> {
    const query = plainToClass(JobFindManyArgs, request.query);
    const results = await this.service.findJobs(params.id, {
      ...query,
      select: {
        budget: true,

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/jobs")
  async connectJobs(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/jobs")
  async updateJobs(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/jobs")
  async disconnectJobs(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: JobWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      jobs: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/receivedMessages")
  @ApiNestedQuery(MessageFindManyArgs)
  async findManyReceivedMessages(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findReceivedMessages(params.id, {
      ...query,
      select: {
        content: true,
        id: true,

        receiver: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        sentAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/receivedMessages")
  async connectReceivedMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receivedMessages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/receivedMessages")
  async updateReceivedMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receivedMessages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/receivedMessages")
  async disconnectReceivedMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      receivedMessages: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reviewsAsClient")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findManyReviewsAsClient(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviewsAsClient(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        rating: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviewsAsClient")
  async connectReviewsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsClient: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviewsAsClient")
  async updateReviewsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsClient: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviewsAsClient")
  async disconnectReviewsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsClient: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/reviewsAsFreelancer")
  @ApiNestedQuery(ReviewFindManyArgs)
  async findManyReviewsAsFreelancer(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviewsAsFreelancer(params.id, {
      ...query,
      select: {
        client: {
          select: {
            id: true,
          },
        },

        content: true,
        createdAt: true,

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        rating: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviewsAsFreelancer")
  async connectReviewsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsFreelancer: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviewsAsFreelancer")
  async updateReviewsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsFreelancer: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviewsAsFreelancer")
  async disconnectReviewsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviewsAsFreelancer: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/sentMessages")
  @ApiNestedQuery(MessageFindManyArgs)
  async findManySentMessages(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findSentMessages(params.id, {
      ...query,
      select: {
        content: true,
        id: true,

        receiver: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

        sentAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/sentMessages")
  async connectSentMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sentMessages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sentMessages")
  async updateSentMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sentMessages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sentMessages")
  async disconnectSentMessages(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sentMessages: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/skills")
  @ApiNestedQuery(SkillFindManyArgs)
  async findManySkills(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Skill[]> {
    const query = plainToClass(SkillFindManyArgs, request.query);
    const results = await this.service.findSkills(params.id, {
      ...query,
      select: {
        description: true,
        id: true,
        name: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/skills")
  async connectSkills(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/skills")
  async updateSkills(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/skills")
  async disconnectSkills(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: SkillWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      skills: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transactionsAsClient")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findManyTransactionsAsClient(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactionsAsClient(params.id, {
      ...query,
      select: {
        amount: true,

        client: {
          select: {
            id: true,
          },
        },

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        transactionDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactionsAsClient")
  async connectTransactionsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsClient: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactionsAsClient")
  async updateTransactionsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsClient: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactionsAsClient")
  async disconnectTransactionsAsClient(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsClient: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/transactionsAsFreelancer")
  @ApiNestedQuery(TransactionFindManyArgs)
  async findManyTransactionsAsFreelancer(
    @common.Req() request: Request,
    @common.Param() params: User1WhereUniqueInput
  ): Promise<Transaction[]> {
    const query = plainToClass(TransactionFindManyArgs, request.query);
    const results = await this.service.findTransactionsAsFreelancer(params.id, {
      ...query,
      select: {
        amount: true,

        client: {
          select: {
            id: true,
          },
        },

        freelancer: {
          select: {
            id: true,
          },
        },

        id: true,

        job: {
          select: {
            id: true,
          },
        },

        transactionDate: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/transactionsAsFreelancer")
  async connectTransactionsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsFreelancer: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/transactionsAsFreelancer")
  async updateTransactionsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsFreelancer: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/transactionsAsFreelancer")
  async disconnectTransactionsAsFreelancer(
    @common.Param() params: User1WhereUniqueInput,
    @common.Body() body: TransactionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      transactionsAsFreelancer: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
