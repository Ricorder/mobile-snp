import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  auth: t.router({
    getUserById: publicProcedure.input(z
      .object({
        id: z.number(),
      })
      .required()).output(z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.enum(['BASIC', 'ADMIN']),
      })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getUserByEmail: publicProcedure.input(z.object({
      email: z.string().min(3).email(),
    })).output(z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
      password: z.string(),
      role: z.enum(['BASIC', 'ADMIN']),
    })).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAllUsers: publicProcedure.output(z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        email: z.string(),
        password: z.string(),
        role: z.enum(['BASIC', 'ADMIN']),
      }),
    )).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    signUp: publicProcedure.input(z.object({
      name: z.string().min(3),
      email: z.string().min(3).email(),
      password: z.string().max(142),
      role: z.enum(['BASIC', 'ADMIN']),
    })).output(z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
      role: z.enum(['BASIC', 'ADMIN']),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    signIn: publicProcedure.input(z.object({
      email: z.string().email(),
      password: z.string(),
    })).output(z.object({
      user: z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email(),
        role: z.enum(['BASIC', 'ADMIN']),
      }),
      backendTokens: z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
        expiresIn: z.number(),
      }),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  }),
  plans: t.router({
    getPlanById: publicProcedure.input(z.object({
      userId: z.number(),
      planId: z.number(),
    })
      .required()).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAllPlansByUser: publicProcedure.input(z
      .object({
        id: z.number(),
      })
      .required()).output(z.array(z.object({
        id: z.number(),
        userId: z.number().nullable().transform(val => val ?? 0),
        name: z.string(),
        description: z.string(),
        status: z.enum(['CHECKED', 'REJECT', 'UNDER_REVIEW', 'IN_WORK']).default('IN_WORK'),
        comment: z.string(),
        createdAt: z.date(),
        canvas: z.array(
          z.object({
            id: z.number(),
            planId: z.number(),
            name: z.string(),
            type: z.string(),
            left: z.number(),
            top: z.number(),
            width: z.number(),
            height: z.number(),
            angle: z.number(),
          }),
        ),
        photos: z.array(
          z.object({
            id: z.number(),
            planId: z.number(),
            link: z.string(),
          }),
        ),
        underPhoto: z.object({
          link: z.string(),
        }),
        row: z.any(),
      }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    getAllPlans: publicProcedure.output(z.array(z.object({
      id: z.number(),
      userId: z.number().nullable().transform(val => val ?? 0),
      name: z.string(),
      description: z.string(),
      status: z.enum(['CHECKED', 'REJECT', 'UNDER_REVIEW', 'IN_WORK']).default('IN_WORK'),
      comment: z.string(),
      createdAt: z.date(),
      canvas: z.array(
        z.object({
          id: z.number(),
          planId: z.number(),
          name: z.string(),
          type: z.string(),
          left: z.number(),
          top: z.number(),
          width: z.number(),
          height: z.number(),
          angle: z.number(),
        }),
      ),
      photos: z.array(
        z.object({
          id: z.number(),
          planId: z.number(),
          link: z.string(),
        }),
      ),
      underPhoto: z.object({
        link: z.string(),
      }),
      row: z.any(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    deletePlan: publicProcedure.input(z.object({
      planId: z.number(),
      photos: z.array(
        z.object({
          id: z.number(),
          planId: z.number(),
          link: z.string(),
        }),
      ),
      underPhoto: z.string(),
    })).output(z.string()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    deleteUnderPhoto: publicProcedure.input(z.object({
      photos: z.array(z.string()),
      underPhoto: z.string(),
    })).output(z.string()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    addPlan: publicProcedure.input(z.object({
      userId: z.number(),
      name: z.string(),
      description: z.string(),
      type: z.union([z.literal("web"), z.literal("mobile")]),
      status: z.enum(['CHECKED', 'REJECT', 'UNDER_REVIEW', 'IN_WORK']),
      comment: z.string(),
      canvas: z.array(
        z.object({
          name: z.string(),
          type: z.string(),
          left: z.number(),
          top: z.number(),
          width: z.number(),
          height: z.number(),
          angle: z.number(),
        }),
      ),
      photos: z.array((z.string())),
      underPhoto: z.string(),
      row: z.any(),
    })).output(z.object({
      id: z.number(),
      userId: z.number().nullable().transform(val => val ?? 0),
      name: z.string(),
      description: z.string(),
      status: z.enum(['CHECKED', 'REJECT', 'UNDER_REVIEW', 'IN_WORK']).default('IN_WORK'),
      comment: z.string(),
      createdAt: z.date(),
      canvas: z.array(
        z.object({
          id: z.number(),
          planId: z.number(),
          name: z.string(),
          type: z.string(),
          left: z.number(),
          top: z.number(),
          width: z.number(),
          height: z.number(),
          angle: z.number(),
        }),
      ),
      photos: z.array(
        z.object({
          id: z.number(),
          planId: z.number(),
          link: z.string(),
        }),
      ),
      underPhoto: z.object({
        link: z.string(),
      }),
      row: z.any(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    statusChange: publicProcedure.input(z.object({
      id: z.number(),
      status: z.enum(['CHECKED', 'REJECT', 'UNDER_REVIEW', 'IN_WORK']),
      comment: z.string(),
    })).output(z.string()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    addFile: publicProcedure.input(z.object({
      base64: z.string(),
      name: z.string(),
    })).output(z.string()).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    addFiles: publicProcedure.input(z.array(
      z.object({
        base64: z.string(),
        name: z.string(),
      }),
    )).output(z.array(z.string())).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    deleteTemporaryFiles: publicProcedure.input(z.object({
      photos: z.array(z.string()),
      underPhoto: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

