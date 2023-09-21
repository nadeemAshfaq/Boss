var app = angular.module('bossApp', ['ngMaterial', 'ngRoute']);



app.controller('bossController', function ($scope, $mdToast, $mdDialog) {


    Office.onReady(function () {

    var mailBody;

            Office.context.mailbox.item.body.getAsync(Office.CoercionType.Text, function (result) {


                if (result.status === Office.AsyncResultStatus.Succeeded) {
                    mailBody = result.value;

                    console.log('Mail Body:', mailBody);

                } else {
                    console.error('Error retrieving mail body:', result.error.message);
                }
            });
       
    
        $scope.apiKey = '';
        $scope.companyInfo = '';
        

        // Function to handle the submit button click
        $scope.submitData = function () {
            

            ProgressLinearActive()
            // Access the input values here
            var apiKeyValue = $scope.apiKey;
            var companyInfoValue = $scope.companyInfo;


            const API_URL = 'https://api.openai.com/v1/chat/completions';
            /* const API_KEY = response.apiKey;*/
           /* const API_KEY = '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';*/




            function bossApi() {
                const data = {
                    'model': 'gpt-3.5-turbo',
                    'messages': [
                        {
                            'role': 'system',
                            'content': 'As TL CARGO  chat agent, your job is chat with the user and answer questions.Your responses should be brief.Do not include any placeholder text or fields.When answering the first time tell the customer you are an Ai Agent and you will answer most of the doubts and tell them they can ask for a real person at any time.When a question falls outside of the company information tell them they can as for a real person or call.If asked, say that your name is Teresia Lopez an Ai customer chat agent.Do not refer people away from the business.The urls given to you are the only ones you are allowed to send so please dont send any other urls that might not be valid. You are friendly, patient, efficient, reliable, smooth, pleasant and ready to help. You will try your best to clear any doubts the client might have in order for them to start sending packages with us. When the customer is chatting for the first time greet them welcome them and greet them very warmly. Never use any quotation marks. Dont respond to questions that are not related to the business.Respond in Spanish by default unless the user is speaking another language, then reply in their language.Keep the urls unchanged and keep them in spanish only.If the mood of the customer is angry, impatient or complaining, let them know the fastest way to contact us is via phone and that you are an automated agent that is limited to certain information.When customers want to pickup packages in Caracas, send them the location and ask them to call ahead so we can have the packages ready.When saying goodbye dont use the word (thanks), say it (is always a pleasure to talk to you) or something similar. When a customer needs to reset the user, tell them to send an email to info@tlcargo.net . If the mood of the customer is angry just tell them to wait for an agent and ask human interaction. Don’t answer in English. Do not give account numbers, do not give accounting information. Our office in Venezuela is a separate entity that handles only transportation. When giving a quote don’t explain the calculations, just give the price. If a customer asks for shipping from Venezuela, we don’t provide that service at this moment. If a customer asks for status of a tracking or a shipment, do not provide any information, tell the customer to call or get human help. If the customer asks if a flight or a maritime shipment got to destination tell the customer to call or get human help.'
                        },
                        {
                            'role': 'user',
                            'content': 'this is the mail I get :' + mailBody + 'this is my company information :' + companyInfoValue+' create reply according to this mail '
                        }
                    ],
                    'max_tokens': 50,
                    'temperature': 0.5,
                    n: 1
                };

                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: API_URL,
                        headers: {
                            'Authorization': `Bearer ${apiKeyValue}`,
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        dataType: 'json',
                        data: JSON.stringify(data),
                        success: function (response) {
                            /*console.log('ChatGPT response:', response);*/
                            const reply = response.choices[0].message.content;
                            $scope.apiResponse =reply
                            console.log('Generated reply:', reply);
                            ProgressLinearInActive()
                            resolve(reply);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.error('AJAX request failed:', textStatus, errorThrown);
                            ProgressLinearInActive()
                            loadToast("error please try again")
                            reject(new Error(errorThrown));
                        }
                    });
                });
            }
            bossApi()
            // Do something with the values, e.g., send them to an API
            
            
        };

        function ProgressLinearActive() {
            $("#StartProgressLinear").show(function () {

                $("#ProgressBgDiv").show();
                $scope.ddeterminateValue = 15;
                $scope.showProgressLinear = false;
                if (!$scope.$$phase) {
                    $scope.$apply();
                }
            });
        };
        function ProgressLinearInActive() {
            $("#StartProgressLinear").hide(function () {
                setTimeout(function () {
                    $scope.ddeterminateValue = 0;
                    $scope.showProgressLinear = true;
                    $("#ProgressBgDiv").hide();
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }, 500);
            });
        };

        function loadToast(alertMessage) {
            var el = document.querySelectorAll('#zoom');
            $mdToast.show(
                $mdToast.simple()
                    .textContent(alertMessage)
                    .position('bottom')
                    .hideDelay(4000))
                .then(function () {
                    $log.log('Toast dismissed.');
                }).catch(function () {
                    $log.log('Toast failed or was forced to close early by another toast.');
                });
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        };

    });
});