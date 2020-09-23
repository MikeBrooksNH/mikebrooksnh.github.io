<%-- 
     Author     : michaelbrooks
--%>
<%@page import="java.sql.*"%>
<%@page import="java.sql.DriverManager"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Configuration Management Database</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="Styles/departmentstyles.css">
    </head>
    <body>

        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.jsp">Home</a></li>
                        <li><a href="AddApplication.jsp">Add Application</a></li>                       
                        <li><a href="AddVM.jsp">Add VMs</a></li>    
                        <li><a href="getApplicationVMLookup.jsp">All VMs for Application</a></li>                       
                        <li><a href="EnvVMLookup.jsp">VMs for Environment</a></li>    
                        <li><a href="displayallVMs.jsp">Display All VMs</a></li>    
                     </ul>
               </div>
            </div>
        </nav>

        <div class="container-fluid text-center">    
            <div class="row content">
                <div class="col-sm-8 text-left"> 
                    <h1>Configuration Management Database</h1>
                    <h3>Insert Application Record</h3>
                    <hr><br>

            <%
                String appname=request.getParameter("appname");
                String abreviation=request.getParameter("abreviation");
                String lob=request.getParameter("lob");
            %>
                    Inserting <%=appname%>  <%=abreviation%>  <%=lob%> <br>

                    <%
                        try {

                            Class.forName("com.mysql.jdbc.Driver");
                            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/cmdb", "cmdb", "cmdb123");

                            Statement stmt = con.createStatement();
                            PreparedStatement ps = con.prepareStatement("INSERT INTO applications(name,abreviation,lob) VALUES (?, ?, ?)");

        	            ps.setString(1,appname);
		            ps.setString(2,abreviation);
		            ps.setString(3,lob);
                            
                            ps.executeUpdate();
                    
                            ResultSet rs = stmt.executeQuery("select * from applications");
                    %>
                    
                    <br> Updated List of Applications<br>
                    <table   class="table table-condensed" >  
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Abreviation</th>
                                <th>Line of Business</th>
                            </tr>
                        </thead>

                        <%
                        while (rs.next()) {%>

                        <tr>
                            <td width="200" height="30"><%=rs.getString("name")%></td>
                            <td width="200" height="30"><%=rs.getString("abreviation")%></td>
                            <td width="200" height="30"><%=rs.getString("lob")%></td>
                        </tr>

                        <%
                        }
                        } catch (Exception e) {
                        }
                        %>
                    </table>    


                </div>
            </div>
        </div>

    </body>
</html>
