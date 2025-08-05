-- CreateTable
CREATE TABLE "public"."Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isChecked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
