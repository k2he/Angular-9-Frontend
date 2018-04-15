package com.angulardemo.services.springservices.controller;

import java.sql.Date;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class LocalDateAttributeConverter implements AttributeConverter<java.util.Date, Date> {
	
    @Override
    public Date convertToDatabaseColumn(java.util.Date date) {
    	return (date == null ? null : new java.sql.Date(date.getTime()));
    }

    @Override
    public java.util.Date convertToEntityAttribute(Date sqlDate) {
    	return (sqlDate == null ? null : new java.util.Date(sqlDate.getTime()));
    }
}