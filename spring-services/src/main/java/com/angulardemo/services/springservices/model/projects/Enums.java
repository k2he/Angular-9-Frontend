package com.angulardemo.services.springservices.model.projects;

public class Enums {
	public enum PStatus {
	    PENDING(1),
	    ACCEPTED(2),
	    STARTED(3),
	    COMPLETED(4),
	    RETURNED(5),
	    DELETED(6);
		
		private int id;
	    private PStatus(int id) {
	        this.id = id;
	    }
	    public int getValue() {
	        return id;
	    }
	}
}
