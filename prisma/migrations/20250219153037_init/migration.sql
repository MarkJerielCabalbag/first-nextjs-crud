-- DropIndex
DROP INDEX `Articles_authorId_fkey` ON `articles`;

-- AddForeignKey
ALTER TABLE `Articles` ADD CONSTRAINT `Articles_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
