-- DropForeignKey
ALTER TABLE `compliments` DROP FOREIGN KEY `compliments_user_receiver_id_fkey`;

-- DropForeignKey
ALTER TABLE `compliments` DROP FOREIGN KEY `compliments_user_sender_id_fkey`;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_user_sender_id_fkey` FOREIGN KEY (`user_sender_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_user_receiver_id_fkey` FOREIGN KEY (`user_receiver_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
