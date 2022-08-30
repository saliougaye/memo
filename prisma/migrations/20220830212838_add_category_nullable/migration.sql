-- DropForeignKey
ALTER TABLE "Memo" DROP CONSTRAINT "Memo_categoryId_fkey";

-- AlterTable
ALTER TABLE "Memo" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Memo" ADD CONSTRAINT "Memo_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
