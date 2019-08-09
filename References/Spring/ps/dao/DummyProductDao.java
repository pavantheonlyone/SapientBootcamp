package com.ps.dao;

import java.util.Collection;
import java.util.logging.Logger;

import com.ps.entity.Product;

public class DummyProductDao implements ProductDao {

	Logger logger = Logger.getLogger(DummyProductDao.class.getName());
	
	public DummyProductDao() {
		logger.info("DummyProductDao not implemented yet ...");
	}
	@Override
	public int count() throws DaoException {
		return 2000;
	}
	@Override
	public Integer addNewProduct(Product product) throws DaoException {
		return null;
	}
	@Override
	public Product getProduct(Integer productId) throws DaoException {
		return null;
	}
	@Override
	public void updateProduct(Product product) throws DaoException {
		return;
	}
	@Override
	public Product deleteProduct(Integer productId) throws DaoException {
		return null;
	}
	@Override
	public Collection<Product> getAllProducts() throws DaoException {
		Collection<Product> list = null;
		return list;
	}
	@Override
	public Collection<Product> getProductsNotInStock() throws DaoException {
		Collection<Product> list = null;
		return list;
	}
	@Override
	public Collection<Product> getProductsByPriceRange(Double min, Double max) throws DaoException {
		Collection<Product> list = null;
		return list;
	}
	@Override
	public Collection<Product> DiscontinuedProducts() throws DaoException {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}
