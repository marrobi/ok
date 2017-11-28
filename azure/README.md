install python3-dev

. ./azure/config_env.sh

worker as a webjob

handle SSL with redis and mysql


{
    "type": "config",
    "name": "appsettings",
    "apiVersion": "2015-08-01",
    "dependsOn": [
        "[resourceId('Microsoft.Web/sites/', parameters('webAppName'))]",
        "[resourceId('Sendgrid.Email/accounts', parameters('sendgridAccountName'))]"
    ],
    "properties": {
        "toAddress": "[parameters('toAddress')]",
        "sendgridSmtpServer": "[reference(resourceId('Sendgrid.Email/accounts', parameters('sendgridAccountName'))).smtpServer]",
        "sendgridUsername": "[reference(resourceId('Sendgrid.Email/accounts', parameters('sendgridAccountName'))).username]",
        "sendgridPassword": "[parameters('sendgridPassword')]"
    }
}