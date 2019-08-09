package com.ps.programs;

import java.util.logging.Logger;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.ps.cfg.AppConfig3;
import com.ps.dao.DaoException;
import com.ps.dao.ProductDao;

public class GetProductCount {
	public static void main(String[] args) throws DaoException {
		
		Logger logger = Logger.getLogger(GetProductCount.class.getName());
		// a variable representing spring container
		AnnotationConfigApplicationContext ctx;
		
		logger.info("pass - 1");
		// create a new spring container using the AppConfig1 as configuration file
		ctx =  new AnnotationConfigApplicationContext(AppConfig3.class);
		logger.info("pass - 2");
		
		ProductDao dao = (ProductDao) ctx.getBean("dao",ProductDao.class);
		logger.info("There are " + dao.count() + " products.");
		
		// close the spring container when no longer required
		ctx.close();
	}
}
