package com.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.model.State;

public class StateRepository {
	public Session session;
	public List<State> list_state(String projectid) 
	{	
	
	Query query = session.createQuery("select p from Phase p  ");		
        return query.list();				
	}


   public void save(State  state)
   {	
		session.beginTransaction();	 
		session.saveOrUpdate(state);	
		session.getTransaction().commit();
	}

   public State  get(int id)
	{
		return (State) session.get(State.class, id);
	}
}
