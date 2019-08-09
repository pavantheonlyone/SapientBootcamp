package com.ps.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ps.entity.Product;

import lombok.NoArgsConstructor;
import lombok.Setter;

@Component("dao")
@NoArgsConstructor
@Setter

public class JdbcProductDao implements ProductDao{
	
	private String driver;
	private String url;
	private String user;
	private String password;
	
	@Autowired(required = false)
	private DataSource dataSource;

	public JdbcProductDao(String driver, String url, String user, String password) {
		this.driver = driver;
		this.url = url;
		this.user = user;
		this.password = password;
	}
	
	private Connection createConnection() throws ClassNotFoundException, SQLException {
		
		if(dataSource != null) {
			return dataSource.getConnection();
		}
		Class.forName(driver);
		return DriverManager.getConnection(url,user,password);
	}
	
	@Override
	public int count() throws DaoException {
		try(
				Connection conn = createConnection();
				PreparedStatement stmt = conn.prepareStatement("select count(*) from products");
				ResultSet rs = stmt.executeQuery();
		) {
			rs.next();
			return rs.getInt(1);
		}
		catch(Exception ex) {
			throw new DaoException(ex);
		}
		
		
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> getProductsNotInStock() throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	

	@Override
	public Collection<Product> getProductsByPriceRange(Double min, Double max) throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Collection<Product> DiscontinuedProducts() throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}


}
