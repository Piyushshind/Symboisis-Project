package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/inventory")
public class GymInventoryController {

	@Autowired
	public GymInventoryService gymInventoryService;

	@PostMapping("create")
	public ResponseEntity<GymInventoryEntity> createInventory(@Valid @RequestBody GymInventoryEntity inventory) {
		GymInventoryEntity savedInventory = gymInventoryService.saveInventory(inventory);
		return ResponseEntity.ok(savedInventory);
	}

	@GetMapping("cheack")
	public String cheack() {
		return "cheack .............. by piyush ";
	}
	
	@PostMapping("/create-multiple")
	  public ResponseEntity<List<GymInventoryEntity>> createMultipleInventories(@RequestBody List<GymInventoryEntity> inventories) {
        List<GymInventoryEntity> savedInventories = gymInventoryService.saveAllInventories(inventories);
        return ResponseEntity.ok(savedInventories);
    }
	
	@GetMapping("getAll")
	public ResponseEntity<List<GymInventoryEntity>> getAllInventories() {
		List<GymInventoryEntity> inventories = gymInventoryService.getAllInventories();
		return ResponseEntity.ok(inventories);
	}

	@GetMapping("/{id}")
	public ResponseEntity<GymInventoryEntity> getInventoryById(@PathVariable Long id) {
		return gymInventoryService.getInventoryById(id).map(ResponseEntity::ok)
				.orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));
	}

	@PutMapping("/update/{id}")
	public ResponseEntity<GymInventoryEntity> updateInventory(@PathVariable Long id,
			@Valid @RequestBody GymInventoryEntity inventory) {
		GymInventoryEntity updatedInventory = gymInventoryService.updateInventory(id, inventory);
		return ResponseEntity.ok(updatedInventory);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteInventory(@PathVariable Long id) {
		gymInventoryService.deleteInventory(id);
		System.out.println("Item deleted with Id :- " + id);
		return ResponseEntity.noContent().build();
	}
}
