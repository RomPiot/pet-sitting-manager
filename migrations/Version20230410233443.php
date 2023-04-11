<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230410233443 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE owner (id INT AUTO_INCREMENT NOT NULL, address TINYTEXT DEFAULT NULL, contacts JSON DEFAULT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE dog ADD owner_id INT DEFAULT NULL, DROP contacts, DROP address, CHANGE birthday birthday DATE DEFAULT NULL');
        $this->addSql('ALTER TABLE dog ADD CONSTRAINT FK_812C397D7E3C61F9 FOREIGN KEY (owner_id) REFERENCES owner (id)');
        $this->addSql('CREATE INDEX IDX_812C397D7E3C61F9 ON dog (owner_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE dog DROP FOREIGN KEY FK_812C397D7E3C61F9');
        $this->addSql('DROP TABLE owner');
        $this->addSql('DROP INDEX IDX_812C397D7E3C61F9 ON dog');
        $this->addSql('ALTER TABLE dog ADD contacts JSON DEFAULT NULL, ADD address TINYTEXT DEFAULT NULL, DROP owner_id, CHANGE birthday birthday DATE DEFAULT NULL COMMENT \'(DC2Type:date_immutable)\'');
    }
}
