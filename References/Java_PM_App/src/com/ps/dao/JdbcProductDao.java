package com.ps.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Collection;

import com.ps.entity.Category;
import com.ps.entity.Product;
import com.ps.util.DbUtil;
import com.ps.util.KeyboardUtil;

public class JdbcProductDao implements ProductDao {
	
	
	
	String sql = "insert into persons (id, name, city, email) values(?, ?, ?, ?)";
	public JdbcProductDao() throws SQLException, ClassNotFoundException {
		try(
				Connection conn = DbUtil.getConnection();
				PreparedStatement stmt = conn.prepareStatement(sql);
			){
			conn.setAutoCommit(false);
			
			int id = KeyboardUtil.getInt("Enter id: ");
			String name = KeyboardUtil.getString("Enter name: ");
			String city = KeyboardUtil.getString("Enter city: ");
			String email = KeyboardUtil.getString("Enter email: ");
			
			stmt.setInt(1, id);
			stmt.setString(2, name);
			stmt.setString(3, city);
			stmt.setString(4, email);
			
			stmt.execute(); // executeUpdate() --> DML, executeQuery()-->SELECT
			conn.commit();
		}
		finally {}
	}
	
	@Override
	public Integer addNewProduct(Product product) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product getProduct(Integer productId) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateProduct(Product product) throws DaoException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Product deleteProduct(Integer productId) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> getAllProducts() throws DaoException {
		
		return null;
	}

	@Override
	public Collection<Product> getProductsNotInStock() throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> getDiscontinuedProducts() throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> getProductsByPriceRange(Double min, Double max) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> getProductsByName(String namePattern) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer count() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Category getCategory(Integer categoryId) {
		// TODO Auto-generated method stub
		return null;
	}

}
