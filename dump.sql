CREATE TABLE "cakes" (
    "id" serial NOT NULL,
    "flavourId" integer NOT NULL,
    "name" varchar(150) NOT NULL,
    "price" numeric NOT NULL,
    "image" varchar(255) NOT NULL,
    "description" TEXT,
    CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
) WITH (OIDS = FALSE);
CREATE TABLE "clients" (
    "id" serial NOT NULL,
    "name" varchar(100) NOT NULL,
    "address" varchar(255) NOT NULL,
    "phone" varchar(11) NOT NULL,
    CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (OIDS = FALSE);
CREATE TABLE "orders" (
    "id" serial NOT NULL,
    "clientId" integer NOT NULL,
    "cakeId" integer NOT NULL,
    "quantity" integer NOT NULL,
    "totalPrice" numeric NOT NULL,
    "createdAt" TIMESTAMP DEFAULT 'NOW()',
    CONSTRAINT "orders_pk" PRIMARY KEY ("id")
) WITH (OIDS = FALSE);
CREATE TABLE "flavours" (
    "id" serial NOT NULL,
    "name" varchar(150) NOT NULL,
    CONSTRAINT "flavors_pk" PRIMARY KEY ("id")
) WITH (OIDS = FALSE);
ALTER TABLE "cakes"
ADD CONSTRAINT "cakes_fk0" FOREIGN KEY ("flavourId") REFERENCES "flavours"("id");
ALTER TABLE "orders"
ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("clientId") REFERENCES "clients"("id");
ALTER TABLE "orders"
ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cakeId") REFERENCES "cakes"("id");