<?php

namespace App\Entity;

use App\Repository\DogRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DogRepository::class)]
class Dog
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $backgroundColor = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?DateTime $birthday = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $breed = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $food = null;

    #[ORM\ManyToMany(targetEntity: Booking::class, mappedBy: 'dogs')]
    private Collection $bookings;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'dogs')]
    private ?Owner $owner = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $textColor = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $note = null;

    public function __construct()
    {
        $this->bookings = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->getName();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBackgroundColor(): ?string
    {
        return $this->backgroundColor;
    }

    public function setBackgroundColor(?string $backgroundColor): self
    {
        $this->backgroundColor = $backgroundColor;

        return $this;
    }

    public function getBirthday(): ?DateTime
    {
        return $this->birthday;
    }

    public function setBirthday(?DateTime $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getBreed(): ?string
    {
        return $this->breed;
    }

    public function setBreed(?string $breed): self
    {
        $this->breed = $breed;

        return $this;
    }

    public function getFood(): ?string
    {
        return $this->food;
    }

    public function setFood(?string $food): self
    {
        $this->food = $food;

        return $this;
    }

    /**
     * @return Collection<int, Booking>
     */
    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->bookings->contains($booking)) {
            $this->bookings->add($booking);
            $booking->addDog($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->removeElement($booking)) {
            $booking->removeDog($this);
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getOwner(): ?Owner
    {
        return $this->owner;
    }

    public function setOwner(?Owner $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    public function getTextColor(): ?string
    {
        return $this->textColor;
    }

    public function setTextColor(string $textColor): self
    {
        $this->textColor = $textColor;

        return $this;
    }

    public function getNote(): ?string
    {
        return $this->note;
    }

    public function setNote(?string $note): self
    {
        $this->note = $note;

        return $this;
    }
}
