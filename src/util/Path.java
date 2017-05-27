package util;

public class Path {


public String GetMainPath()
{
  java.io.File xddd = new java.io.File("");   //Dummy file
    String  abspath=xddd.getAbsolutePath();
//String a=  System.getProperty("user.dir");
return abspath;
}
}
