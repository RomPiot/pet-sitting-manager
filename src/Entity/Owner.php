<?php

namespace App\Entity;

use App\Repository\OwnerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OwnerRepository::class)]
class Owner
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, length: 255, nullable: true)]
    private ?string $address = null;

    #[ORM\Column(type: Types::JSON, nullable: true)]
    private ?array $contacts = [];

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\OneToMany(mappedBy: 'owner', targetEntity: Dog::class)]
    private Collection $dogs;

    public function __construct()
    {
        $this->dogs = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->getName();
    }

    public
    function getId(): ?int
    {
        return $this->id;
    }


    public
    function getContacts(): ?array
    {
        return $this->contacts;
    }

    public
    function setContacts(?array $contacts): self
    {
        $this->contacts = $contacts;

        return $this;
    }


    public
    function getAddress(): ?string
    {
        return $this->address;
    }

    public
    function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public
    function getName(): ?string
    {
        return $this->name;
    }

    public
    function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Dog>
     */
    public
    function getDogs(): Collection
    {
        return $this->dogs;
    }

    public
    function addDog(Dog $dog): self
    {
        if (!$this->dogs->contains($dog)) {
            $this->dogs->add($dog);
            $dog->setOwner($this);
        }

        return $this;
    }

    public
    function removeDog(Dog $dog): self
    {
        if ($this->dogs->removeElement($dog)) {
            // set the owning side to null (unless already changed)
            if ($dog->getOwner() === $this) {
                $dog->setOwner(null);
            }
        }

        return $this;
    }
}
