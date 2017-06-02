//Negyedik
function userAgent(userAgent, min_ie, min_edge, min_chrome, min_firefox, min_fxios, min_opera, min_safari) {	

     var return_version;
	 
	 //Internet Explorer < 11
     //Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0
	 if (userAgent.match(/MSIE/i) && userAgent.match(/^.*MSIE ([0-9]+).*$/i)[1] < min_ie) {
				 
	 return_version = 'Minimum Internet Explorer ' + min_ie;
	 
	 }
	 //Internet Explorer == 11
     //Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko
	 else if (!userAgent.match(/Mobile/i) && !userAgent.match(/MSIE/i) && userAgent.match(/Trident\/([^\s]+)/i) && userAgent.match(/^.*rv\:([\d\.]+).*$/i) && userAgent.match(/^.*rv\:([0-9]+).*$/i)[1] == min_ie) {
				 
	 return_version = 'Internet Explorer ' + userAgent.match(/^.*rv\:([0-9]+).*$/i)[1];
	 
	 }
     else if (!userAgent.match(/Mobile/i) && !userAgent.match(/MSIE/i) && userAgent.match(/Trident\/([^\s]+)/i) && userAgent.match(/^.*rv\:([\d\.]+).*$/i) && userAgent.match(/^.*rv\:([0-9]+).*$/i)[1] < min_ie) {			 
	 
	 return_version = 'Minimum Internet Explorer ' + min_ie;	
	
	 }	  
	 //Mobile Internet Explorer == 11
	 //Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; Microsoft; Virtual) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
     else if (userAgent.match(/IEMobile/i) && userAgent.match(/^.*IEMobile\/([0-9]+).*$/i)[1] == min_ie) {
		 	
	 return_version = 'Mobile Internet Explorer ' + userAgent.match(/^.*IEMobile\/([0-9]+).*$/i)[1];
 
	 }	 
	 else if (userAgent.match(/IEMobile/i) && userAgent.match(/^.*IEMobile\/([0-9]+).*$/i)[1] < min_ie) {
			 	
	 return_version = 'Minimum Mobile Internet Explorer ' + min_ie;
	
	 }
	 //Microsoft Edge >= 12
	 //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586
	 else if (!userAgent.match(/Mobile/i) && userAgent.match(/Edge/i) && userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1] >= min_edge) {
			 	
	 return_version = 'Microsoft Edge ' + userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1];
	 
	 }
     else if (!userAgent.match(/Mobile/i) && userAgent.match(/Edge/i) && userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1] < min_edge) {			 
	 
	 return_version = 'Minimum Microsoft Edge ' + min_edge;
	
	 }	
	 //Mobile Microsoft Edge >= 12
	 //Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0
	 else if (userAgent.match(/Mobile/i) && userAgent.match(/Edge/i) && userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1] >= min_edge) {
			 	
	 return_version = 'Mobile Microsoft Edge ' + userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1];
	 
	 }
     else if (userAgent.match(/Mobile/i) && userAgent.match(/Edge/i) && userAgent.match(/^.*Edge\/([0-9]+).*$/i)[1] < min_edge) {			 
	 
	 return_version = 'Minimum Mobile Microsoft Edge ' + min_edge;
	
	 }	
	 //Chrome
	 else if(!userAgent.match(/Mobile/i) && !userAgent.match(/NokiaBrowser/i) && !userAgent.match(/OPR/i) && !userAgent.match(/Opera/i) && !userAgent.match(/Presto/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/Chrome/i) && userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1] >= min_chrome) {
	 
		 
	 return_version = 'Chrome ' + userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1];
	 	 
	 }
	 else if(!userAgent.match(/Mobile/i) && !userAgent.match(/NokiaBrowser/i) && !userAgent.match(/OPR/i) && !userAgent.match(/Opera/i) && !userAgent.match(/Presto/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/Chrome/i) && userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1] < min_chrome) {
		 
	 return_version = 'Minimum Chrome ' + min_chrome;
	 
	 }
	 //Mobile Chrome (Nokia X)
	 //Mozilla/5.0 (Linux; Android 4.1.2; Nokia_X Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.117 Mobile Safari/537.36	 
	 else if(userAgent.match(/Mobile/i) && !userAgent.match(/CriOS/i) && !userAgent.match(/NokiaBrowser/i) && !userAgent.match(/OPR/i) && !userAgent.match(/Opera/i) && !userAgent.match(/Presto/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/Chrome/i) && userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1] >= min_chrome) {
		 
	 return_version = 'Mobile Chrome ' + userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(userAgent.match(/Mobile/i) && !userAgent.match(/CriOS/i) && !userAgent.match(/NokiaBrowser/i) && !userAgent.match(/OPR/i) && !userAgent.match(/Opera/i) && !userAgent.match(/Presto/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/Chrome/i) && userAgent.match(/^.*Chrome\/([0-9]+).*$/i)[1] < min_chrome) {
		 
	 return_version = 'Minimum Mobile Chrome ' + min_chrome;
		 
	 }	 
	 //IOS Chrome (iPad)
     //Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) CriOS/37.0.2062.60 Mobile/12A405 Safari/9537.53
	 else if(userAgent.match(/iPad/i) && userAgent.match(/Mobile/i) && userAgent.match(/CriOS/i) && userAgent.match(/^.*CriOS\/([0-9]+).*$/i)[1] >= min_chrome) {
		 
	 return_version = '<strong>IPAD</strong> IOS Mobile Chrome ' + userAgent.match(/^.*CriOS\/([0-9]+).*$/i)[1];
		 
	 }
	 //IOS Chrome (iPhone)
	 else if(userAgent.match(/iPhone/i) && userAgent.match(/Mobile/i) && userAgent.match(/CriOS/i) && userAgent.match(/^.*CriOS\/([0-9]+).*$/i)[1] >= min_chrome) {
		 
	 return_version = '<strong>IPHONE</strong> IOS Mobile Chrome ' + userAgent.match(/^.*CriOS\/([0-9]+).*$/i)[1];
		 
	 } 
	 else if(userAgent.match(/iPad/i || /iPhone/i) && userAgent.match(/Mobile/i) && userAgent.match(/CriOS/i) && userAgent.match(/^.*CriOS\/([0-9]+).*$/i)[1] < min_chrome) {
		 
	 return_version = 'Minimum IOS Mobile Chrome ' + min_chrome;
		 
	 } 	  	  
	 //Firefox
	 //Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0
	 else if(!userAgent.match(/Mobile/i) && userAgent.match(/Firefox/i) && userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1] >= min_firefox) {
		 
	 return_version = 'Firefox ' + userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(!userAgent.match(/Mobile/i) && userAgent.match(/Firefox/i) && userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1] < min_firefox) {
		 
	 return_version = 'Minimum Firefox ' + min_firefox;
		 
	 }	  
	 //Mobile Firefox (Nokia X)
	 //Mozilla/5.0 (Android; Mobile; rv:32.0) Gecko/32.0 Firefox/32.0
	 else if(userAgent.match(/Mobile/i) && userAgent.match(/Firefox/i) && userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1] >= min_firefox) {
		 
	 return_version = 'Mobile Firefox ' + userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(userAgent.match(/Mobile/i) && userAgent.match(/Firefox/i) && userAgent.match(/^.*Firefox\/([0-9]+).*$/i)[1] < min_firefox) {
		 
	 return_version = 'Minimum Mobile Firefox ' + min_firefox;
		 
	 }
	 //IOS  Firefox (iPad) FxiOS
	 //Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) FxiOS/4.0 Mobile/13F69 Safari/601.1.46
	 else if(userAgent.match(/iPad/i) && userAgent.match(/Mobile/i) && userAgent.match(/FxiOS/i) && userAgent.match(/^.*FxiOS\/([0-9]+).*$/i)[1] >= min_fxios) {
		 
	 return_version = '<strong>IPAD</strong> IOS Mobile Firefox ' + userAgent.match(/^.*FxiOS\/([0-9]+).*$/i)[1];
		 
	 }
	 //IOS Firefox (iPhone)
	 else if(userAgent.match(/iPhone/i) && userAgent.match(/Mobile/i) && userAgent.match(/FxiOS/i) && userAgent.match(/^.*FxiOS\/([0-9]+).*$/i)[1] >= min_fxios) {
		 
	 return_version = '<strong>IPHONE</strong> IOS Mobile Firefox ' + userAgent.match(/^.*FxiOS\/([0-9]+).*$/i)[1];
		 
	 }
	 
	 else if(userAgent.match(/iPad/i || /iPhone/i) && userAgent.match(/Mobile/i) && userAgent.match(/FxiOS/i) && userAgent.match(/^.*FxiOS\/([0-9]+).*$/i)[1] < min_chrome) {
		 
	 return_version = 'Minimum IOS Mobile Firefox ' + min_fxios;
		 
	 }	 
	 //Opera
	 //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0
	 else if(!userAgent.match(/Mobile/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/OPR/i) && userAgent.match(/^.*OPR\/([0-9]+).*$/i)[1] >= min_opera) {
		 
	 return_version = 'Opera ' + userAgent.match(/^.*OPR\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(!userAgent.match(/Mobile/i) && !userAgent.match(/OPiOS/i) && userAgent.match(/OPR/i) && userAgent.match(/^.*OPR\/([0-9]+).*$/i)[1] < min_opera) {
		 
	 return_version = 'Minimum Opera ' + min_opera;
		 
	 } 
	 //Macintosh Safari
	 //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.1.25 (KHTML, like Gecko) Version/8.0 Safari/600.1.25
	 else if(!userAgent.match(/Mobile/i) && userAgent.match(/Macintosh/i) && userAgent.match(/Safari/i) && userAgent.match(/Version/i) && userAgent.match(/^.*Version\/([0-9]+).*$/i)[1] >= min_safari) {
		 
	 return_version = 'Safari ' + userAgent.match(/^.*Version\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(!userAgent.match(/Mobile/i) && userAgent.match(/Macintosh/i) && userAgent.match(/Safari/i) && userAgent.match(/Version/i) && userAgent.match(/^.*Version\/([0-9]+).*$/i)[1] < min_safari) {
		 
	 return_version = 'Minimum Safari ' + min_safari;
		 
	 }
	 //IOS Safari
	 //Mozilla/5.0 (iPad; CPU OS 8_0_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A405 Safari/600.1.4
	 else if(userAgent.match(/iPad/i) && userAgent.match(/Mobile/i) && userAgent.match(/Safari/i) && userAgent.match(/Version/i) && userAgent.match(/^.*Version\/([0-9]+).*$/i)[1] >= min_safari) {
		 
	 return_version = '<strong>IPAD</strong> IOS Mobile Safari ' + userAgent.match(/^.*Version\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(userAgent.match(/iPhone/i) && userAgent.match(/Mobile/i) && userAgent.match(/Safari/i) && userAgent.match(/Version/i) && userAgent.match(/^.*Version\/([0-9]+).*$/i)[1] >= min_safari) {
		 
	 return_version = '<strong>IPHONE</strong> IOS Mobile Safari ' + userAgent.match(/^.*Version\/([0-9]+).*$/i)[1];
		 
	 }
	 else if(userAgent.match(/iPad/i || /iPhone/i) && userAgent.match(/Safari/i) && userAgent.match(/Version/i) && userAgent.match(/^.*Version\/([0-9]+).*$/i)[1] < min_safari) {
		 
	 return_version = 'Minimum Mobile Safari ' + min_safari;	 
		 
	 }		 	
     else {
		 
	 return_version = 'Erre a böngészőre nincs optimalizálva az oldal';
 
     };	
	 
	 return '<span class="span_browser">' + return_version + '</span>';
};	 