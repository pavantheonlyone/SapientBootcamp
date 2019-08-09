package com.ps.programs;

import java.util.Collection;
import java.util.logging.Logger;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ps.cfg.AppConfig4;
import com.ps.dao.DaoException;
import com.ps.dao.ProductDao;
import com.ps.entity.Product;

public class AOPDemo {

	public static void main(String[] args) throws Exception {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig4.class);
		ProductDao dao = ctx.getBean("hibernateTemplateProductDao", ProductDao.class);
		Logger logger = Logger.getLogger(AOPDemo.class.getName());

		logger.info(String.format("dao is an instanceof %s",dao.getClass().getName()));;

		int pc = dao.count();
		if(pc!=0) {
			logger.info(String.format("There are %d products.", pc));;
		}
		

		try {
			Product p = dao.getProduct(2);
			logger.info(String.format("p.name = %s",p.getProductName()));
			logger.info("p.price = "+ p.getUnitPrice());
			
			p.setUnitPrice(p.getUnitPrice() + 1);
			
			dao.updateProduct(p);
			
			p = dao.getProduct(2);
			logger.info("After updating the price...");
			logger.info(String.format("p.name = %s",p.getProductName()));
			logger.info(String.format("p.price = $%lf",p.getUnitPrice()));
			
			
		} catch (DaoException e) {
			logger.info("There was an exception");
		}

		Collection<Product> list = dao.getProductsByPriceRange(50.0, 250.0);
		if(list!=null) {
			int size = list.size();
			logger.info(String.format("There are %d products between $50 and $250.", size));
		}
	
		list = dao.getProductsByPriceRange(250.0, 50.0);
		if(list!=null) {
			int size = list.size();
			logger.info(String.format("There are %d products between $250 and $50.", size));
		}
		

		list = dao.getProductsNotInStock();
		if(list!=null) {
			int size = list.size();
			logger.info(String.format("%d products are not in stock",size));
		}
		
		list = dao.DiscontinuedProducts();
		if(list!=null) {
			logger.info(String.format("%d products are discontinued", list.size()));
		}
		
		ctx.close();

	}
}