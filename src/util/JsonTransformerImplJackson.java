package util;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonTransformerImplJackson implements JsonTransformer {
	
	
	public String toJSON(Object data) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
 
            return objectMapper.writeValueAsString(data);
        } catch (JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }
 
    public Object fromJSON(String json, Class clazz) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
 
            return objectMapper.readValue(json, clazz);
        } catch (IOException ex) {
            throw new RuntimeException(ex);
        }
    }

	
}
