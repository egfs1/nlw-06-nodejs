-- CreateTable
CREATE TABLE `compliments` (
    `id` VARCHAR(191) NOT NULL,
    `user_sender_id` VARCHAR(191) NOT NULL,
    `user_receiver_id` VARCHAR(191) NOT NULL,
    `tag_id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_user_sender_id_fkey` FOREIGN KEY (`user_sender_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_user_receiver_id_fkey` FOREIGN KEY (`user_receiver_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compliments` ADD CONSTRAINT `compliments_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `tags`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
