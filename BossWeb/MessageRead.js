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

        $scope.companyInfo =
            "TL CARGO is a leading company in International Freight Transportation and Integral Logistics, with offices in the United States and Venezuela. The company aims to provide the entire logistics chain, integrating all services such as container handling, Full Container Load (FCL), Less than Container Load (LCL), air and land cargo. In Venezuela, they specialize in managing special projects, extra-sized cargo for import and export, and offer customs, storage, and physical distribution services to the main cities of the country. TL CARGO offers a wide range of services, including door-to-door shipments to all of Venezuela and Latin America, making it easy and convenient for customers to receive the products they want in the fastest, most economical, and safest way possible. The services offered include shipments to the door of your house throughout Venezuela, maritime cargo transport, air cargo transport, shopping service and lockers, moves to Venezuela, and shipment of vehicles and heavy machinery. For shipments within Venezuela, the company offers various pricing options based on the destination. We divide Venezuela in three Zones, Zone 1 includes only Caracas, for Maritime Shipping to this zone is $29.99 per Cubic Foot Minimum of 3 cubic feet, which is $89.97. The cost of air shipping for this zone is $4.99 per pound or volume, with shipments dispatched on Fridays and taking about 5 days to get there. Zone 2 Central East or Centro-Oriente in spanish, includes Puerto la Cruz, Barcelona, Lecherías, Maracay,, Valencia, Guatire, Guarenas, San Antonio de los altos, Los teques. Maritime Shipping to this zone is $32.00 per Cubic Foot Minimum 3 cubic feet, $95.99. For air shipping to this zone costs $5.50 per pound or volume, with a minimum of 4 pounds. Zone 3 is for the Rest of the Country or Resto del pais, maritime shipping is $34.00 per Cubic Foot Minimum 3 cubic feet or $109.99, air shipping costs $5.99 per pound or volume, with a minimum of 4 pounds. In the new maritime mode, costs are designed to include all duties for personal, self-use, or company merchandise. For merchandise intended for commercial purposes, which will be sold, you must provide invoices for customs evaluation to determine if additional duties are required.  When customers ask about price per boxes these are the most common sizes, Zone 1 Caracas SMALL box $59.99 *only for office pickup promotion, repackaging not applicable, but applies to Shein or Temu. MEDIUM box $89.97 LARGE box $109.99 . Zone 2 Central East Puerto la Cruz, Barcelona, Lecherías, Maracay, and Valencia, Guatire, Guarenas, San Antonio de los altos, Los teques, MEDIUM box $95.99, LARGE box $118.00. Zone 3 Rest of the Country, MEDIUM box $99.99. LARGE box $125.004. The small box is only for Zone 1 Caracas, for the other zones the smallest box is a medium box, it is important to understand that and don’t give quote for small box outside of Caracas. TL CARGO also offers shipping services to Colombia and Panama, no other countries at this time.To calculate air shipments we take the highest value between weight and volumetric weight, the formula to calculate volumetric weight is(Length x Width x height) / 166 .To calculate Ocean shipments we take the volume in cubic feet, the formula to calculate cubic feet is(Length x Width x height) / 1756).All measurements need to be in inches, weight in pounds.For Colombia, air shipping costs $2.99 per pound or volume, with a minimum of $19.90(equivalent to 10 pounds or volume).There is a 30 % tax on the value of the cargo and a mandatory 5 % insurance charge on the value of the cargo, with a minimum of $15.00.For Panama, air shipping costs $4.99 per pound or volume, with a minimum of $49.99.Deliveries are estimated to take 5 business days.They offer consolidated maritime services for general cargo and personal effects, container shipping for general cargo, removals, and vehicles, and heavy machinery shipping for trucks, buses, and tractors.For customers looking to shop in the United States, TL CARGO offers a shopping service and lockers, providing a personal account and exclusive physical space in their warehouses for customers to send their online purchases.Customers can register for a free TL CARGO locker and start enjoying the experience of shopping in the best stores in the United States.When the customer asks how to create a locker or casillero send the company website www.tlcargo.net, indicate that on the right top corner is the link to create it.TL CARGO also specializes in the shipment of vehicles and heavy machinery, offering services to transport any type of vehicle from the USA to Venezuela, in order to quote a vehicle shipment a real agent needs to answer.The company takes care of all the necessary procedures, ensuring a smooth and hassle - free experience for customers.Customers can pay for our services in Bolivares at the monitor dolar rate, via zelle, deposit, wire transfers or international credit cards.Customers can contact TL CARGO to learn more about their services and pricing by visiting their website at www.tlcargo.net or contacting them via email at info @tlcargo.net.Company whatsapp is + 17866034298 and + 584241521758 The company's physical address is 8520 NW 66th St, Miami, FL 33166, and their telephone numbers are USA: (786) 409 7088 and Venezuela: (0212) 720 4488. Our offices in Venezuela are located in Avenida Orinoco Las Mercedes, Caracas, don’t provide the address if the customer doesn’t ask for it. Further information and updates can be found on their social media pages, including Twitter (https://www.twitter.com/tlcargomiami/), Facebook (https://www.facebook.com/tlcargomiami/), and Instagram (https://www.instagram.com/tlcargomiami/). is a cost calculator on our website on the home page: https://www.tlcargo.net/index.php Whenever a customer asks for a quote, give the quote taking in consideration the correct rate and include a disclaimer that it is a quote generated by an ai with the input received, they can always check it calling us or by visiting the cost calculator page. Via Ocean we do not take the weight in consideration, however the customer needs to know that a medium box recommended weight is about 50 lbs, when packing more weight some items can be damaged in transport. If the customer asks for a tracking of his shipment or where is his package always get a real person to answer, do not give status of shipments. When customer ask about the rate of bolivares to make a payment tell them we use Monitor Dolar as index. If the customer asks about any issue get a real human and tell them to wait or call if the issue is urgent. With TL Cargo Locker, customers can receive purchases from any stores or personal deliveries, stores like Amazon, Walmart, Target, Costco, Sams Club and SHEIN are the most loved stores by our customers. For purchases on Shein we have on our Instagram step by step videos to explain the customer how to make the purchase and receive in Venezuela. We deliver to all Venezuela, however there are some routes that might be difficult to get and we will coordinate with the customer to better accommodate it. Personal Shopper is a service we provide when the customer does not have a way to pay in US for their orders, we charge a 15% fee for this service and customers can pay in Bolivares, Zelle or Dollars in Cash in Caracas. Customers locker is identified with the name they put in the registration, that means they need to buy using their name and our miami address, when asked give this example (Teresa Lopez 8520 NW 66 ST Miami Florida 33166). If a customer ask about our store, they mean our office. The following are frequently asked questions: Do you collect cargo in other cities? Yes, definitely! Our customers from other states or cities outside Miami make online purchases and provide our address in Miami, or they can send the packages to us via UPS (we have established a strategic alliance to offer lower prices). To provide you with a quote, we need to know the address where the packages are located, their weight, and dimensions in order to estimate the shipping cost to Miami. Please send this information to the email info@tlcargo.net, and we will be happy to assist you. Do you offer repackaging services? Repackaging is completely free. We welcome all your purchases and repackage them to ensure you don't pay extra.Once all your shipments are received, you need to send us the tracking numbers and product descriptions via email to info @tlcargo.net.Do you consolidate packages ? Yes, we offer free repackaging services.We gather all your purchases and repackage them to avoid additional charges.Once all your shipments are received, you need to send us the tracking numbers and product descriptions via email to info @tlcargo.net.Can I send multiple packages and have them shipped as one ? Yes, certainly! We provide free repackaging services.We gather all your purchases and repackage them to avoid additional charges.Once all your shipments are received, you need to send us the tracking numbers and product descriptions via email to info @tlcargo.net.How do I create a mailbox ? On our website, www.tlcargo.net, you can find the[Register] option in the upper right corner.Simply follow the steps there.The name and information for the mailbox should match the person who will receive the packages in Venezuela or whichever country is the destination.Even if you are making the purchase for someone else, please use the name of the recipient to create the mailbox.When making your purchases, use the same name that was used when creating the mailbox.How do I receive my purchases ? It's very simple to receive your purchases at your home. Just register with us to get your free Virtual Mailbox, and you can start making your online purchases using your name and our address, which is 📍8520 NW 66th St. Miami FL 33166. For any further questions, you can call us at 📞 786-603-4298. What should I do after making my purchase? After making your purchases, please send us an email at info@TLCargo.net with the tracking numbers provided by Amazon or any other store. Once you have received all the confirmations for your packages and verified that the contents in your mailbox are correct, let us know when you want us to ship your goods. For this, please send us an email to info@tlcargo.net with a list of the receipt numbers (TL-xxxx) and the confirmation of when and by what shipping method you want us to send them. Do I need to inform you about my purchases? After making your purchases, please send us an email at info@TLCargo.net with the tracking numbers provided by Amazon or any other store. Once you have received all the confirmations for your packages and verified that the contents in your mailbox are correct, let us know when you want us to ship your goods. For this, please send us an email to info@tlcargo.net with a list of the receipt numbers (TL-xxxx) and the confirmation of when and by what shipping method you want us to send them. I don't have a credit card, how can I make purchases ? We are happy to assist you with your purchases.This service has a cost of 20 % if your purchase is less than $100, and 15 % if your purchase is over $100, based on the final value of the purchase.";

       

       
        
        $scope.$apply();
        $scope.submitData = function () {

            var apiKeyValue = $scope.apiKey;

           
            var companyInfoValue = $scope.companyInfo;

           

            ProgressLinearActive()
            
           
           

            

           
            const API_URL = 'https://api.openai.com/v1/chat/completions';
         
         




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
                            'content': 'this is my company information{' + companyInfoValue + '} and this is the email I get {' + mailBody +'} draft the best answer and action point for the email'
                        }
                    ],
                    'max_tokens': 1000,
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
