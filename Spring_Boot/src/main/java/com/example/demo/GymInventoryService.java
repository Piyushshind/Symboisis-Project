package com.example.demo;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GymInventoryService {

	@Autowired
	private GymInventoryRepository gymInventoryRepository;

	public GymInventoryEntity saveInventory(GymInventoryEntity inventory) {
		return gymInventoryRepository.save(inventory);
	}

	public List<GymInventoryEntity> getAllInventories() {
		return gymInventoryRepository.findAll();
	}

	public Optional<GymInventoryEntity> getInventoryById(Long id) {
		return gymInventoryRepository.findById(id);
	}

	public List<GymInventoryEntity> saveAllInventories(List<GymInventoryEntity> inventories) {
		return gymInventoryRepository.saveAll(inventories);
	}

	public GymInventoryEntity updateInventory(Long id, GymInventoryEntity updatedInventory) {
		return gymInventoryRepository.findById(id).map((GymInventoryEntity inventory) -> {
			inventory.setItemName(updatedInventory.getItemName());
			inventory.setItemCategory(updatedInventory.getItemCategory());
			inventory.setQuantity(updatedInventory.getQuantity());
			inventory.setPrice(updatedInventory.getPrice());
			inventory.setItemCondition(updatedInventory.getItemCondition());
			inventory.setAvailable(updatedInventory.isAvailable());
			inventory.setDistributorContactNumber(updatedInventory.getDistributorContactNumber());
			inventory.setDistributorEmail(updatedInventory.getDistributorEmail());
			inventory.setCurrentdate(updatedInventory.getCurrentdate());
			return gymInventoryRepository.save(inventory);
		}).orElseThrow(() -> new RuntimeException("Inventory not found with id: " + id));
	}

	// Delete an inventory item
	public void deleteInventory(Long id) {
		gymInventoryRepository.deleteById(id);
	}
}
