package com.ps.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Embeddable
public class ContactDetails {
	
	@Column(name="address")
	private String address;
	
	@Column(name="city")
	private String city;
	
	@Column(name="region")
	private String region;
	
	@Column(name="POSTAL_CODE")
	private String postalcode;
	
	@Column(name="country")
	private String country;

}
