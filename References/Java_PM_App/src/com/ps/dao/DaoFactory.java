package com.ps.dao;

import java.io.IOException;


public final class DaoFactory {

	private DaoFactory() {
	}

	public static ProductDao getProductDao(String discriminator) throws DaoException, IOException {
		switch (discriminator.toLowerCase()) {
		case "arraylist":
//			return new ArrayListProductDao();
		case "map":
			throw new DaoException("MapProductDao not avaialble yet");
			
		case "jdbc":
			try {
				return new JdbcProductDao();
			}catch(Exception e) {
				System.out.println(e);
			}
		case "hibernate":
			return new HibernateProductDao();
		case "csv":
//			return new CsvReaderProductDao();
//			throw new DaoException("CsvProductDao not avaialble yet");
		case "serialized":
			throw new DaoException("SerializedProductDao not avaialble yet");
		default:
			throw new DaoException("Invalid type for DAO implementation");
		}
	}
}
