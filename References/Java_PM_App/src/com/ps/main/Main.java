package com.ps.main;





import java.io.IOException;

import com.ps.dao.DaoException;
import com.ps.dao.DaoFactory;
import com.ps.dao.ProductDao;
import com.ps.entity.Product;
import com.ps.util.KeyboardUtil;
/**
 * 
 * @author pavparam
 * Branched from vinkayar's - master branch
 *
 */
public class Main {

	ProductDao dao;

	public Main() {
		try {
			dao = DaoFactory.getProductDao("hibernate");
		} catch (DaoException e) {
			System.out.println("Something went wrong!!");
			System.out.println("This stack trace may help you understand the error:");
			System.out.println("------------------------------------------------------------------");
			e.printStackTrace(System.out);
			System.out.println("------------------------------------------------------------------");
			System.out.println("BYE!!!");
			System.exit(0);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private int menu() {
		try {
			System.out.println("---------------------------------");
			System.out.println("Product Manager App - v1.0");
			System.out.println("---------------------------------");
			System.out.println("1. List all products");
			System.out.println("2. Search a product by id");
			System.out.println("3. Search products by name");
			System.out.println("4. Search products by price range");
			System.out.println("5. List out-of-stock products");
			System.out.println("6. List products that are no longer sold");
			System.out.println("7. Add a new product");
			System.out.println("8. Edit product details");
			System.out.println("0. Exit");

			int choice = KeyboardUtil.getInt("Enter your choice: ");
			return choice;
		} catch (Exception e) {
			return -1;
		}
	}

	private void start() {

		THE_LOOP: while (true) {
			int choice = menu();
			switch (choice) {
			case 1:
					displayAllProducts();
				break;
			case 2:
				searchAndDisplayProductById();
				break;
			case 3:
				searchAndDisplayProductByName();
				break;
			case 4:
				searchAndDisplayProductByPriceRange();
				break;
			case 5:
				displayProductsNotInStock();
				break;
			case 6:
				displayDiscontinuedProducts();
				break;
			case 7:
				acceptAndAddProductDetails();
				break;
			case 8:
				searchAndEditProductDetails();
				break;
			case 0:
				System.out.println("Thank you for usin the Product Manager App.");
				break THE_LOOP;
			case -1:
				System.out.println("Invalid value for choice. Must be numeric.");
				break;
			default:
				System.out.println("Invalid choice. Please enter a number between 0 and 8.");
			}
		}
	}

	private void searchAndEditProductDetails() {
//		System.out.println("searchAndEditProductDetails not implemented yet!");
		System.out.println("Updating the product....\n");
		Product p = new Product();
		
		int id = KeyboardUtil.getInt("Enter the id of the product\n");
		p.setProductId(id);
		p.setDiscontinued(false);
		
		String pname = KeyboardUtil.getString("Enter the product name\n");
		p.setProductName(pname);
		
		String QpUnit = KeyboardUtil.getString("Enter the quantity per unit[String]\n");
		p.setQuantityPerUnit(QpUnit);
		
		double unitprice = KeyboardUtil.getDouble("Enter the Product's price[Double]\n");
		p.setUnitPrice(unitprice);
		
		Integer unit_in_stock = KeyboardUtil.getInt("Enter the number of units in stock[Integer]\n");
		p.setUnitsInStock(unit_in_stock);
		
		Integer units_on_order = KeyboardUtil.getInt("Enter the number of units on order[Integer]\n");
		p.setUnitsOnOrder(units_on_order);
		
		Integer reorder_level = KeyboardUtil.getInt("Enter the Reorder Level[Integer]\n");
		p.setReorderLevel(reorder_level);
		
		try {
			dao.updateProduct(p);
		} catch (DaoException e) {
			e.printStackTrace();
		}
	
	}

	private void acceptAndAddProductDetails() {
//		System.out.println("acceptAndAddProductDetails not implemented yet!");
		System.out.println("Adding new product ...Please enter the product details..\n");
		Product p = new Product();
		
		String pname = KeyboardUtil.getString("Enter the product name\n");
		p.setProductName(pname);
		
		String QpUnit = KeyboardUtil.getString("Enter the quantity per unit[String]\n");
		p.setQuantityPerUnit(QpUnit);
		
		double unitprice = KeyboardUtil.getDouble("Enter the Product's price[Double]\n");
		p.setUnitPrice(unitprice);
		
		Integer unit_in_stock = KeyboardUtil.getInt("Enter the number of units in stock[Integer]\n");
		p.setUnitsInStock(unit_in_stock);
		
		Integer units_on_order = KeyboardUtil.getInt("Enter the number of units on order[Integer]\n");
		p.setUnitsOnOrder(units_on_order);
		
		Integer reorder_level = KeyboardUtil.getInt("Enter the Reorder Level[Integer]\n");
		p.setReorderLevel(reorder_level);
		
		try {
			int recv = dao.addNewProduct(p);
			System.out.printf("The new product with id = %d is added into the ArrayList\n",recv);
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void displayDiscontinuedProducts() {
//		System.out.println("displayDiscontinuedProducts not implemented yet!");
		try {
			dao.getDiscontinuedProducts();
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void displayProductsNotInStock() {
//		System.out.println("displayProductsNotInStock not implemented yet!");
		try {
			dao.getProductsNotInStock();
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void searchAndDisplayProductByPriceRange() {
//		System.out.println("searchAndDisplayProductByPriceRange not implemented yet!");
		double min = KeyboardUtil.getDouble("Enter the minimum price range\n");
		double max = KeyboardUtil.getDouble("Enter the maximum price range\n");
		try {
			dao.getProductsByPriceRange(min, max);
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void searchAndDisplayProductByName() {
//		System.out.println("searchAndDisplayProductByName not implemented yet!");
		String name = KeyboardUtil.getString("\nEnter the name of the product you want to search");
		try {
			dao.getProductsByName(name);
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void searchAndDisplayProductById() {
//		System.out.println("searchAndDisplayProductById not implemented yet!");
		int key = KeyboardUtil.getInt("Enter the product ID\n");
		try {
			dao.getProduct(key);
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	private void displayAllProducts() {
//		System.out.println("displayAllProducts not implemented yet!");
		try {
			dao.getAllProducts();
		} catch (DaoException e) {
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		new Main().start();
	}
}
