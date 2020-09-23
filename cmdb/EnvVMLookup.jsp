<%-- 
    Document   : template2
    Created on : Mar 29, 2018, 10:04:32 PM
    Author     : michaelbrooks
--%>

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
                    <hr><br>

                    <form name="emp"  action="displayVMByEnvironment.jsp" method="POST">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Please Enter the Environment</td>
                                    <td><input name="env" type="text" ></td>
                                </tr>
                            </tbody>
                        </table>
                        <input type="reset"  <button type="button" class="btn btn-primary" value="Reset Values" name="Reset" />
                        <input type="submit" <button type="button" class="btn btn-primary" value="Lookup" />
                    </form>
                </div>
            </div>

        </div>
        <script type="text/javascript" language="javascript">
            <!--
                // Clear the form on load  (handle data on the form 
            // when hitting the back button 
            -- >
                    function clear() {
                        document.emp.reset();
                    }
        </script>

    </body>
</html>
