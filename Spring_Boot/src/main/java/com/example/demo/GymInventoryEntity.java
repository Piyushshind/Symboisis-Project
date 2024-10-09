package com.example.demo;

import java.time.LocalDate;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "inventory")
@Data
@NoArgsConstructor
@ToString
public class GymInventoryEntity {
    

    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @NotBlank(message = "Item name is mandatory")
   @Column(nullable = false)
   private String itemName;

   @Enumerated(EnumType.STRING)
   @Column(nullable = false)
   @jakarta.validation.constraints.NotNull(message = "Item category is mandatory")
   private Category itemCategory;

   @Min(value = 1, message = "Quantity must be at least 1")
   @Column(nullable = false)
   private int quantity;

   @DecimalMin(value = "0.0", inclusive = false, message = "Price must be greater than zero")
   @Column(nullable = false)
   private double price;

   @Enumerated(EnumType.STRING)
   @jakarta.validation.constraints.NotNull(message = "Condition status is mandatory")
   @Column(nullable = false)
   private ConditionStatus itemCondition;

   @Column(nullable = false)
   private boolean available;

   @PastOrPresent(message = "Date must be in the past or present")
   @Column(nullable = false)
   private LocalDate currentdate;

   @NotBlank(message = "Distributor contact number is mandatory")
   @Pattern(regexp = "^[0-9]{10}$", message = "Contact number must be a valid 10-digit number")
   @Column(nullable = false)
   private String distributorContactNumber;

   @NotBlank(message = "Distributor email is mandatory")
   @Email(message = "Email should be valid")
   @Column(nullable = false)
   private String distributorEmail;

   public enum ConditionStatus {
       GOOD, AVERAGE, BAD
   }

   public enum Category {
       CARDIO, STRENGTH, FLEXIBILITY, BALANCE, RECOVERY
   }
}
