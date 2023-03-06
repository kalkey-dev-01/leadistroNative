// import React from 'react'


export const Tem = {
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>Spa</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta  name="viewport" content="width=display-width, initial-scale=1.0, maximum-scale=1.0," />
		<link href="https://fonts.googleapis.com/css?family=Tangerine:400,700" rel="stylesheet" type='text/css' />
		<link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" type='text/css' />
		
		<style type="text/css">		
			html { width: 100%; }
			body {margin:0; padding:0; width:100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
			img { display: block !important; border:0; -ms-interpolation-mode:bicubic;}

			.ReadMsgBody { width: 100%;}
			.ExternalClass {width: 100%;}
			.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
			.images {display:block !important; width:100% !important;}
			
			.heading {font-family: 'Tangerine', cursive, Arial, Helvetica Neue, Helvetica, sans-serif !important;}
			.MsoNormal {font-family: Poppins, Arial, Helvetica Neue, Helvetica, sans-serif !important;}	
			p {margin:0 !important; padding:0 !important;}						
			.display-button td, .display-button a  {font-family: Poppins, Arial, Helvetica Neue, Helvetica, sans-serif !important;}
			.display-button a:hover {text-decoration:none !important;}
			
			/* MEDIA QUIRES */
			@media only screen and (min-width:799px)
			{
				.saf-table {
					display:table !important;
				}
				.main-width {
					width:600px;
				}
				.width800 {
					width:800px !important;
					max-width:800px !important;
				}
			}
			@media only screen and (max-width:799px)
            {
                body {width:auto !important;}
				.display-width {width:100% !important;}	
				.display-width-inner {width:600px !important;}	
				.padding { padding:0 20px !important; }	
				.res-padding-full { padding:0px !important; }
				.res-padding-left{padding-left: 0px !important;}
				.width800 {
					width:100% !important;
					max-width:100% !important;
				}
            }
			@media only screen and (max-width:768px)
            {	
				.width768{
					max-width:684px !important;
				}
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.full-width-height
				{ 	
					padding-top:40px !important;
					padding-bottom:25px !important;
				}
			}
			@media only screen and (max-width:680px)
			{	
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 40px !important;
				}
				.padding-hide
				{	
					padding-bottom:0px !important;
				}
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.full-width-height
				{ 	
					padding-top:50px !important;
					padding-bottom:40px !important;
				}
			}
			@media only screen and (max-width:660px)
			{
				.child1-width{
					width:50% !important;
					max-width:50% !important;
				}
				.child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 30px !important;
				}
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.full-width-height
				{ 	
					padding-top:45px !important;
					padding-bottom:20px !important;
				}
			}
			@media only screen and (max-width:640px)
			{
				.res-attract-height {
					padding: 20px 10px 0 10px !important;
				}
				.child1-width, .child2-width{
					width:50% !important;
					max-width:50% !important;
				}
				.res-padding-left{
					padding-left: 20px !important;
				}
				.full-width-height
				{ 	
					padding-top:40px !important;
					padding-bottom:30px !important;
				}
			}
			@media only screen and (max-width:639px)
			{
				body {width:auto !important;}
				.display-width {width:100% !important;}
				.display-width-inner,  
				.display-width-child {width:100% !important;}
				.display-width-child .button-width .display-button {width:auto !important;}
				.res-padding-full { padding:0 20px !important; }
				.padding-hide{ padding:0px !important; }
				.padding { padding:0 20px !important; }
				.saf-table {
					display:block !important;
				}
				.width282 {
				    width:282px !important;  
				}
				.div-width {				
				display: block !important;
				width: 100% !important;
				max-width: 100% !important;
				}
				.res-height20-bottom { padding-bottom:20px !important;}
				.res-height-top { padding-top:60px !important;}
				.full-width-height { padding-bottom:60px !important;}
				.footer-width {width:151px !important;}
				.height20 {height:20px !important;}
				.height30 {height:30px !important;}
				.hide-height, .hide-bar {display:none !important;}
				.txt-center {text-align:center !important;}
				span.unsub-width {width:100% !important;
				display:block !important; padding-bottom:10px !important; }
				.res-center{
					margin:0 auto !important;
					display:table !important;
				}
			}
			
			@media only screen and (max-width:480px) 
			{
				.display-width table, .display-width-child2 table {width:100% !important;}
				.display-width .button-width .display-button {width:auto !important;}
				.display-width-child .footer-width {width:151px !important;}
				.display-width .width282 {
				    width:282px !important;  
				}
				.div-width {				
					display: block !important;
					width: 100% !important;
					max-width: 100% !important;
				}
			}
			@media only screen and (max-width:380px)
			{
				.display-width table {width:100% !important;}
				.display-width .button-width .display-button {width:auto !important;}
				.display-width-child .width282 { width:100% !important;}
			}
			@media only screen and (max-width:330px)
			{
				.res-font { font-size:33px !important;}
			}
		</style>		
	</head>
	<body>
		<!--[if (gte mso 9)|(IE)]>
			<style >
				.Heading {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}
				.MsoNormal {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}
				.display-button td, .display-button a, a {font-family: Arial, Helvetica Neue, Helvetica, sans-serif !important;}			
			</style>
		<![endif]-->
			
		<!-- VIEW IN BROWSER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG VIEW BROWSER -->
												<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																				<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																					<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																						<tbody>
																							<tr>
																								<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																							</tr>
																							<tr>
																								<!-- ID:TXT VIEW BROWSER -->
																								<td align="right" class="MsoNormal" style="padding:0 10px; color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:12px; font-weight:400; letter-spacing:1px;">
																									<a href="#" style="color:#666666; text-decoration:none;">
																										VIEW IN BROWSER
																									</a>
																								</td>
																							</tr>
																							<tr>
																								<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																							</tr>	
																						</tbody>	
																					</table>
																				</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- VIEW IN BROWSER ENDS -->
		
		<!-- MENU STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG MENU -->
									<table align="center" bgcolor="#f6f6f6" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
										<tr>
											<td align="center" class="padding">
												<!--[if (gte mso 9)|(IE)]>
												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
													<tr>
														<td align="center" valign="top" width="600">
															<![endif]-->
															<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																	<tr>
																		<td height="15" class="height30" style="mso-line-height-rule: exactly; line-height: 15px;"></td>
																	</tr>
																	<tr>
																		<td align="center" style="font-size:0;">
																			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:100%;">
																				<tr>
																					<td align="center" style="font-size:0; width:100%; max-width:100%;">
																						<!--[if (gte mso 9)|(IE)]>
																						<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																							<tr>
																								<td align="center" valign="top" width="150">
																									<![endif]-->
																									<div style="display:inline-block; max-width:150px; width:100%; vertical-align:top;" class="div-width">
																										<!--TABLE LEFT-->
																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																											<tr>
																												<td align="center">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																														<tr>
																															<!-- ID:TXT MENU -->
																															<td align="center" style="color:#333333;" width="150">
																																<a href="#" style="color:#333333; text-decoration:none;"><img src="https://www.pennyblacktemplates.com/demo/emily/images/150x50.png" alt="150x50" width="150" height="50" style="margin:0; border:0; padding:0; display:block;"/></a>
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</table>
																									</div>
																			
																								<!--[if (gte mso 9)|(IE)]>
																								</td>
																								<td align="center" valign="top" width="446">
																								<![endif]-->
																									<div style="display:inline-block; width:100%; max-width:446px; vertical-align:top;"  class="div-width">
																										<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																											<tr>
																												<td align="center" style="font-size:0;">		
																													<!--[if (gte mso 9)|(IE)]>
																													<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																													<td width="235">
																													<![endif]-->
																														<div style="display:inline-block; width:100%; max-width:225px; vertical-align:top;" class="div-width">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:210px;">
																																<tr>
																																	<td width="100%" style="font-size:0;">&nbsp;</td>
																																</tr>
																															</table>
																														</div>
																													<!--[if (gte mso 9)|(IE)]>
																													</td>
																													<td width="210">
																													<![endif]-->
																													<div style="display:inline-block; width:100%; max-width:215px; vertical-align:top;" class="div-width">
																														<!--TABLE RIGHT-->
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																															<tr>
																																<td align="center" style="font-size:0;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																		<tr>
																																			<td align="center">
																																				<table align="center" border="0" width="100%" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td height="13" class="height10" style="mso-line-height-rule: exactly; line-height: 13px; font-size:0;">&nbsp;</td>
																																					</tr>
																																					<tr>	
																																						<!-- ID:TXT MENU -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="#" style="color:#666666;text-decoration:none;">
																																								ABOUT
																																							</a>
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							|																					
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="#" style="color:#666666;text-decoration:none;">
																																								OFFERS
																																							</a>
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							|																					
																																						</td>
																																						<td width="10">&nbsp;</td>
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:400; font-size:14px; line-height:24px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																							<a href="#" style="color:#666666;text-decoration:none;">
																																								SUPPORT
																																							</a>
																																						</td>				
																																					</tr>
																																					<tr>
																																						<td height="13" class="hide-height" style="mso-line-height-rule: exactly; line-height: 13px; font-size:0;">&nbsp;</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>	
																													</div>
																													<!--[if (gte mso 9)|(IE)]>
																													</td>
																													</tr>
																													</table>
																													<![endif]-->
																												</td>
																											</tr>
																										</table>
																									</div>
																									<!--[if (gte mso 9)|(IE)]>
																								</td>
																							</tr>
																						</table>
																						<![endif]-->
																					</td>
																				</tr>
																			</table>
																		</td>			
																	</tr>
																	<tr>
																		<td height="15" class="height30" style="mso-line-height-rule: exactly; line-height: 15px; font-size:0;">&nbsp;</td>
																	</tr>
																</table>
															</div>
														<!--[if (gte mso 9)|(IE)]>
														</td>
													</tr>
												</table>
												<![endif]-->
											</td>
										</tr>
									</table>
								</div>
							<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>
		<!-- MENU ENDS -->
		
		<!-- HEADER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG HEADER OPTIONAL -->
									<table align="center" border="0" bgcolor="#000000" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center">
												<!--[if gte mso 9]>
												<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:614px; margin:auto;">
												<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/800x810.jpg" color="#f6f8f7" />
												<v:textbox inset="0,0,0,0">
												<![endif]-->
												<div style="margin:auto;">
													<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/800x810.jpg" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/800x810.jpg); background-position:center; background-repeat:no-repeat;">
														<tr>
															<td align="center" class="padding">
																<!--[if (gte mso 9)|(IE)]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
																	<tr>
																		<td align="center" valign="top" width="600">
																			<![endif]-->
																			<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="left" style="padding:0 10px;">
																							<!--[if (gte mso 9)|(IE)]>
																							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="left" width="100%" style="width: 100%;">
																								<tr>
																									<td align="left" valign="top" width="405" style="width:405px;">
																										<![endif]-->
																										<div style="display:inline-block; width:100%; max-width:400px; vertical-align:top;">
																											<table align="left" border="0" class="display-width-child" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																												<tr>
																													<!-- ID:TXT HEADER SUBTITLE -->
																													<td align="left" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:40px; line-height:50px; font-weight:700; letter-spacing:2px;">
																														City Popular SPA
																													</td>
																												</tr>
																												<tr>
																													<td height="5" style="mso-line-height-rule: exactly; line-height:5px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																													<!-- ID:TXT HEADER TITLE -->
																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:38px; line-height:48px; font-weight:600; letter-spacing:1px;">
																														WELCOME TO OUR SPA CENTER
																													</td>
																												</tr>
																												<tr>
																													<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																													<!-- ID:TXT HEADER CONTENT -->
																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; letter-spacing:1px; line-height:24px;">
																														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie accumsan.
																													</td>
																												</tr>	
																												<tr>
																													<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																												   <td align="left" class="button-width">
																														<!-- ID:BTN HEADER BUTTON -->
																														<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																															<tr>
																																<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																	<a href="#" style="color:#ffffff; text-decoration:none;">GET A QUOTE</a>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>	
																											</table>
																										</div>
																										<!--[if (gte mso 9)|(IE)]>
																									</td>
																									<td width="195">&nbsp;</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if (gte mso 9)|(IE)]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</table>
												</div>
												<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->	
											</td>
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- HEADER ENDS -->
		
		<!-- BEAUTY SPA TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- BEAUTY SPA TOP SPACE ENDING -->
		
		<!-- BEAUTY SPA TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Come &amp; Get Beautify
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					WE ARE BEAUTY SPA
																				</td>
																			</tr>
																			<tr>
																				<td height="25" style="mso-line-height-rule:exactly; line-height:25px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- BEAUTY SPA TITLE ENDS -->
		
		<!-- BEAUTY SPA STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tr>
																				<td align="center" style="font-size:0;">
																					<table align="center" dir="rtl" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																						<tr>
																							<td align="center" style="font-size:0;">
																								<!--[if mso]>
																								<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																									<tr>
																										<td align="center" valign="top" width="250">
																											<![endif]-->
																											<div style="display:inline-block; max-width:250px; vertical-align:top; width:100%;" class="div-width">
																												<!--TABLE RIGHT-->
																												<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%" class="display-width-child" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																													<tr>
																														<td align="left" style="padding:5px 10px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																<tr>
																																	<td>
																																		<table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;width:auto !important;">
																																			<tr>
																																				<td align="left" width="110">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/110x110x1.png" alt="110x110x1" width="110" height="110" style="margin:0; border:0;" />
																																				</td>
																																				<td width="5">&nbsp;</td>
																																				<td align="left" width="110">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/110x110x2.png" alt="110x110x2" width="110" height="110" style="margin:0; border:0;" />
																																				</td>
																																			</tr>
																																			<tr>
																																				<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																			</tr>
																																			<tr>
																																				<td align="left" width="110">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/110x110x3.png" alt="110x110x3" width="110" height="110" style="margin:0; border:0;" />
																																				</td>
																																				<td width="5">&nbsp;</td>																							
																																				<td align="left" width="110">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/110x110x4.png" alt="110x110x4" width="110" height="110" style="margin:0; border:0;" />
																																				</td>
																																			</tr>																						
																																		</table>
																																	</td>
																																</tr>
																															</table>
																														</td>
																													</tr>	
																												</table>
																											</div>
																											<!--[if mso]>
																										</td>
																										<td align="center" valign="top" width="340">
																											<![endif]-->
																											<div style="display:inline-block; max-width:340px; vertical-align:top; width:100%;" class="div-width">
																												<!--TABLE LEFT-->
																												<table align="left" dir="ltr" border="0" cellpadding="0" cellspacing="0" width="100%" class="display-width-child" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																													<tr>
																														<td align="center" style="padding:5px 10px;">
																															<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																<tr>
																																	<!-- ID:TXT CONTENT -->
																																	<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan.
																																	</td>
																																</tr>
																																<tr>
																																	<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<!-- ID:TXT CONTENT -->
																																	<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																		Pellentesque vel suscipit dolor. Integer et dapibus nibh ante ipsum primis.
																																	</td>
																																</tr>
																																<tr>
																																	<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td align="left" class="button-width">
																																		<!-- ID:BTN COMMON BUTTON -->
																																		<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																			<tr>
																																				<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																					<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a>
																																				</td>
																																			</tr>
																																		</table>
																																	</td>
																																</tr>
																															</table>	
																														</td>
																													</tr>
																												</table>
																												<!-- -->
																											</div>
																											<!--[if mso]>
																										</td>
																									</tr>
																								</table>
																								<![endif]-->	
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->						
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- BEAUTY SPA ENDS -->
		
		<!-- BEAUTY SPA BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- BEAUTY SPA BOTTOM SPACE ENDING -->
		
		<!-- LUXURIOUS SPA TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- LUXURIOUS SPA TOP SPACE ENDING -->
		
		<!-- LUXURIOUS SPA STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																			<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																											<tr>
																												<td align="center" valign="top" width="262">
																													<![endif]-->
																													<div style="display:inline-block; max-width:262px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE LEFT -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td align="left" style="color:#666666;" width="242">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/242x320.jpg" alt="242x320" width="242" height="320" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:auto;" />
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>	
																										
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="322">
																													<![endif]-->
																													<div style="display:inline-block; max-width:322px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE RIGHT -->	
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<!-- ID:TXT SUBTITLE-1 -->
																																			<td align="left" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:32px; line-height:42px; letter-spacing:2px; mso-line-height-rule:exactly;">
																																				Few Words
																																			</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 2COL HEADING -->
																																			<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:24px; line-height:34px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																				LUXURIOUS SPA
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT CONTENT -->
																																			<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan vel suscipit dolor.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;">
																																				<!--[if mso]>
																																				<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																					<tr>
																																						<td align="center" valign="top" width="150">
																																							<![endif]-->
																																							<div style="display:inline-block; max-width:150px; vertical-align:top; width:100%;" class="div-width">
																																								<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																									<tr>
																																										<td style="padding:10px 2px;">
																																											<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																												<tr>	
																																													<!-- ID:TXT LIST -->
																																													<td align="left" valign="middle" width="25" style="line-height:0px;">	
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/15x15x1.png" alt="15x15x1" width="15" height="15" style="margin:0; border:0;" />
																																													</td>
																																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:13px; letter-spacing:1px;">
																																														CUSTOMIZABLE
																																													</td>
																																												</tr>
																																											</table>
																																										</td>
																																									</tr>
																																									<tr>
																																										<td style="padding:10px 2px;">
																																											<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																												<tr>	
																																													<!-- ID:TXT LIST -->
																																													<td align="left" valign="middle" width="25" style="line-height:0px;">	
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/15x15x1.png" alt="15x15x1" width="15" height="15" style="margin:0; border:0;" />
																																													</td>
																																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:13px; letter-spacing:1px;">
																																														24/7 SUPPORT
																																													</td>
																																												</tr>
																																											</table>
																																										</td>
																																									</tr>
																																								</table>
																																							</div>
																																							<!--[if mso]>
																																						</td>
																																						<td align="center" valign="top" width="150">
																																							<![endif]-->
																																							<div style="display:inline-block; max-width:150px; vertical-align:top; width:100%;" class="div-width">
																																								<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																									<tr>
																																										<td style="padding:10px 2px;">
																																											<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																												<tr>	
																																													<!-- ID:TXT LIST -->
																																													<td align="left" valign="middle" width="25" style="line-height:0px;">	
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/15x15x1.png" alt="15x15x1" width="15" height="15" style="margin:0; border:0;" />
																																													</td>
																																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:13px; letter-spacing:1px;">
																																														BEST QUALITY
																																													</td>
																																												</tr>
																																											</table>
																																										</td>
																																									</tr>
																																									<tr>
																																										<td style="padding:10px 2px;">
																																											<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																												<tr>	
																																													<!-- ID:TXT LIST -->
																																													<td align="left" valign="middle" width="25" style="line-height:0px;">	
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/15x15x1.png" alt="15x15x1" width="15" height="15" style="margin:0; border:0;" />
																																													</td>
																																													<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:13px; letter-spacing:1px;">
																																														BEST PRICES
																																													</td>
																																												</tr>
																																											</table>
																																										</td>
																																									</tr>
																																								</table>
																																							</div>
																																							<!--[if mso]>
																																						</td>
																																					</tr>
																																				</table>
																																				<![endif]-->
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																		   <td align="left" class="button-width">
																																				<!-- ID:BTN COMMON BUTTON -->
																																				<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																					<tr>
																																						<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if mso]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- LUXURIOUS SPA ENDS -->
		
		<!-- LUXURIOUS SPA BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- LUXURIOUS SPA BOTTOM SPACE ENDING -->
		
		<!-- PRIMARY SERVICES TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES TOP SPACE ENDING -->

		<!-- PRIMARY SERVICES TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Best Services
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR PRIMARY SERVICES
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES TITLE ENDS -->
		
		<!-- PRIMARY SERVICES STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tbody>
																				<tr>
																					<td align="center">
																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																							<tr>
																								<td align="center" style="font-size:0;">
																									<!--[if mso]>
																									<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																										<tr>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE LEFT -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<td align="center" width="48" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x1.png" alt="48x48x1" width="48" height="48" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#666666;">MASSAGE</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE CENTER -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<td align="center" width="48" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x2.png" alt="48x48x2" width="48" height="48" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#666666;">FACIAL</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE RIGHT -->
																													<table align="right" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																	<tr>
																																		<td align="center">
																																			<!-- ID:BG PRIMARY SERVICES -->
																																			<table align="center" border="0" bgcolor="#f6f6f6" class="width282" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center">
																																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																							<tr>
																																								<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<td align="center" width="48" valign="middle">
																																									<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x3.png" alt="48x48x3" width="48" height="48" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																								</td>
																																							</tr>	
																																							<tr>
																																								<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT PRIMARY SERVICES HEADING -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																									<a href="#" style="text-decoration:none; color:#666666;">STEAM BATH</a>
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>	
																																								<!-- ID:TXT PRIMARY SERVICES CONTENT -->
																																								<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																								</td>
																																							</tr>
																																						</table>
																																					</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:BR PRIMARY SERVICES BOTTOM BORDER -->
																																					<td height="20" style="border-bottom:4px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																										</tr>
																									</table>
																									<![endif]-->
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</tbody>	
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES ENDS -->
		
		<!-- PRIMARY SERVICES BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- PRIMARY SERVICES BOTTOM SPACE ENDING -->
		
		<!-- WHY CHOOSE US STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tr>
														<td align="center">
															<table align="center"  border="0" cellpadding="0" cellspacing="0" width="100%">
																<tr>
																	<td align="right" class="res-padding-full">
																		<!--[if mso]>
																			<table border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width:800px;">
																				<tr>
																					<td width="100">&nbsp;</td>
																					<td width="700">
																						<![endif]-->
																						<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width width768" style="max-width:700px;">
																							<tr>
																								<td align="center">
																									<table align="center" dir="rtl" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%">
																										<tr>
																											<td  align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%">
																													<tr>
																														<td align="center" valign="top" width="400">
																															<![endif]-->
																															<div style="display:inline-block; width:100%; max-width:400px; vertical-align:top;" class="div-width child1-width">
																																<!--TABLE RIGHT -->
																																<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																	<tr>										
																																		<td align="left" class="res-height20-bottom">
																																			<table align="center" border="0" cellpadding="0" width="100%" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:auto !important;">
																																				<tr>
																																					<td align="center" width="400" style="color:#ffffff; font-size:0;">
																																						<img src="https://www.pennyblacktemplates.com/demo/emily/images/400x345.jpg" alt="400x345" width="400" height="345" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:auto;"/>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>			
																																	</tr>
																																</table>			
																															</div>	
																															
																														<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																														<![endif]-->
																															<div style="display:inline-block; max-width:300px; width:100%; vertical-align:top;" class="div-width child2-width">
																																<!--TABLE LEFT -->
																																<table align="center" dir="ltr" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="res-padding-left padding-hide">
																																			<div style="display:inline-block; max-width:300px; width:100%; vertical-align:top;" class="div-width">
																																				<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																					<tr>
																																						<td align="center" class="full-width-height padding-hide res-attract-height" style="padding:60px 20px;">
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																																								<tr>
																																									<!-- ID:TXT 2COL HEADING -->
																																									<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:24px; line-height:34px; font-weight:500; letter-spacing:1px;">
																																										WHY CHOOSE US
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT CONTENT -->
																																									<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan. Pellentesque vel suscipit.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																								   <td align="left" class="button-width res-center">
																																										<!-- ID:BTN COMMON BUTTON -->
																																										<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																											<tr>
																																												<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																													<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>		
																																						</td>
																																					</tr>	
																																				</table>
																																			</div>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>	
																									</table>
																								</td>
																							</tr>
																						</table>	
																						<!--[if mso]>
																					</td>
																				</tr>
																			</table>
																		<![endif]-->	
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- WHY CHOOSE US ENDS -->
		
		<!-- OUR PACKAGES-1 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-1 TOP SPACE ENDING -->
		
		<!-- OUR PACKAGES-1 TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Special Gifts
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR PACKAGES
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-1 TITLE ENDS -->
		
		<!-- OUR PACKAGES-1 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																		<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="585">
																											<tr>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;">
																															<!-- TABLE LEFT -->	
																															<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																<tr>
																																	<td align="center" style="padding:15px 5px;"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="center">
																																					<!--[if gte mso 9]>
																																					<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:185px; height:350px; margin:auto;">
																																					<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/185x350x1.jpg" color="#f6f8f7" />
																																					<v:textbox inset="0,0,0,0">
																																					<![endif]-->
																																					<div style="margin:auto;">
																																						<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/185x350x1.jpg" cellpadding="0" cellspacing="0" width="185" class="display-width" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/185x350x1.jpg); background-position:center; background-repeat: no-repeat; height:350px !important; background-size:cover;">
																																							<tr>
																																								<td align="center">
																																									<table align="center" border="0" cellspacing="0" cellpadding="0" width="90%" style="width:90% !important;">
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 HEADING -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																												STANDARD
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="5" style="mso-line-height-rule: exactly; line-height: 5px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 NUM -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:34px; font-weight:600; line-height:44px; letter-spacing:1px;">
																																												$44
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="10" style="mso-line-height-rule: exactly; line-height: 10px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Lorem ipsum dolor
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Duis vehicula nibh
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Ante ipsum primis
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Amet orci luctus
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Integer diam orci
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="20" style="mso-line-height-rule: exactly; line-height: 20px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																										   <td align="center" class="button-width">
																																												<!-- ID:BTN PACKAGES-1 BUTTON -->
																																												<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																													<tr>
																																														<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																															<a href="#" style="color:#ffffff; text-decoration:none;">PURCHASE</a>
																																														</td>
																																													</tr>
																																												</table>
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																									</table>	
																																								</td>
																																							</tr>
																																						</table>
																																					</div>
																																					<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
																																				</td>
																																			</tr>
																																		</table>	
																																	</td>
																																</tr>
																															</table>
																														</div>	
																													</div>
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;">
																															<!-- TABLE CENTER -->	
																															<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																<tr>
																																	<td align="center" style="padding:15px 5px;"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="center">
																																					<!--[if gte mso 9]>
																																					<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:185px; height:350px; margin:auto;">
																																					<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/185x350x2.jpg" color="#f6f8f7" />
																																					<v:textbox inset="0,0,0,0">
																																					<![endif]-->
																																					<div style="margin:auto;">
																																						<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/185x350x2.jpg" cellpadding="0" cellspacing="0" width="185" class="display-width" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/185x350x2.jpg); background-position:center; background-repeat: no-repeat; height:350px !important; background-size:cover;">
																																							<tr>
																																								<td align="center">
																																									<table align="center" border="0" cellspacing="0" cellpadding="0" width="90%" style="width:90% !important;">
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 HEADING -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																												PREMIUM
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="5" style="mso-line-height-rule: exactly; line-height: 5px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 NUM -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:34px; font-weight:600; line-height:44px; letter-spacing:1px;">
																																												$55
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="10" style="mso-line-height-rule: exactly; line-height: 10px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Lorem ipsum dolor
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Duis vehicula nibh
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Ante ipsum primis
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Amet orci luctus
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Integer diam orci
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="20" style="mso-line-height-rule: exactly; line-height: 20px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																										   <td align="center" class="button-width">
																																												<!-- ID:BTN PACKAGES-1 BUTTON -->
																																												<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																													<tr>
																																														<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																															<a href="#" style="color:#ffffff; text-decoration:none;">PURCHASE</a>
																																														</td>
																																													</tr>
																																												</table>
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</div>
																																					<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
																																				</td>
																																			</tr>
																																		</table>	
																																	</td>
																																</tr>
																															</table>
																														</div>
																													</div>
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;">
																															<!-- TABLE RIGHT -->	
																															<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																<tr>
																																	<td align="center" style="padding:15px 5px;"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="center">
																																					<!--[if gte mso 9]>
																																					<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:185px; height:350px; margin:auto;">
																																					<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/185x350x3.jpg" color="#f6f8f7" />
																																					<v:textbox inset="0,0,0,0">
																																					<![endif]-->
																																					<div style="margin:auto;">
																																						<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/185x350x3.jpg" cellpadding="0" cellspacing="0" width="185" class="display-width" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/185x350x3.jpg); background-position:center; background-repeat: no-repeat; height:350px !important; background-size:cover;">
																																							<tr>
																																								<td align="center">
																																									<table align="center" border="0" cellspacing="0" cellpadding="0" width="90%" style="width:90% !important;">
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 HEADING -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																												EXTENDED
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="5" style="mso-line-height-rule: exactly; line-height: 5px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 NUM -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:34px; font-weight:600; line-height:44px; letter-spacing:1px;">
																																												$66
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="10" style="mso-line-height-rule: exactly; line-height: 10px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Lorem ipsum dolor
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Duis vehicula nibh
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Ante ipsum primis
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Amet orci luctus
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="3" style="mso-line-height-rule: exactly; line-height:3px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																											<!-- ID:TXT PACKAGES-1 CONTENT -->
																																											<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; letter-spacing:1px;">
																																												Integer diam orci
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="20" style="mso-line-height-rule: exactly; line-height: 20px; font-size:0;">&nbsp;</td>
																																										</tr>
																																										<tr>
																																										   <td align="center" class="button-width">
																																												<!-- ID:BTN PACKAGES-1 BUTTON -->
																																												<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																													<tr>
																																														<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																															<a href="#" style="color:#ffffff; text-decoration:none;">PURCHASE</a>
																																														</td>
																																													</tr>
																																												</table>
																																											</td>
																																										</tr>
																																										<tr>
																																											<td height="35" style="mso-line-height-rule: exactly; line-height: 35px; font-size:0;">&nbsp;</td>
																																										</tr>
																																									</table>
																																								</td>
																																							</tr>
																																						</table>
																																					</div>
																																					<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
																																				</td>
																																			</tr>
																																		</table>	
																																	</td>
																																</tr>
																															</table>
																														</div>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-1 ENDS -->
		
		<!-- OUR PACKAGES-1 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-1 BOTTOM SPACE ENDING -->
		
		<!-- OUR PACKAGES-2 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-2 TOP SPACE ENDING -->
		
		<!-- OUR PACKAGES-2 TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#b8a48d; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Check &amp; Select
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR PACKAGES
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-2 TITLE ENDS -->
		
		<!-- OUR PACKAGES-2 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td align="center">
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																										<tr>
																											<td align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG PACKAGES-2 -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/140x140x1.png" alt="140x140x1" width="140" height="140" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 SUBHEADING -->
																																									<td align="center" class="heading" style="color:#b8a48d; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:32px; line-height:42px; letter-spacing:2px; mso-line-height-rule:exactly;">
																																										Basic
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										NATURAL CURE
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																								   <td align="center" class="button-width">
																																										<!-- ID:BTN PACKAGES-2 BUTTON -->
																																										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																											<tr>
																																												<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																													<a href="#" style="color:#ffffff; text-decoration:none;">BOOK NOW</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG PACKAGES-2-1 -->
																																			<table align="center" bgcolor="#B1A684" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/140x140x2.png" alt="140x140x2" width="140" height="140" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2-1 SUBHEADING -->
																																									<td align="center" class="heading" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:32px; line-height:42px; letter-spacing:2px; mso-line-height-rule:exactly;">
																																										Premium
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2-1 HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										STAY &amp; CURE
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2-1 CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#f6f6f6; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																								   <td align="center" class="button-width">
																																										<!-- ID:BTN PACKAGES-2-1 BUTTON -->
																																										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																											<tr>
																																												<td align="center" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																													<a href="#" style="color:#B1A684; text-decoration:none;">BOOK NOW</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG PACKAGES-2 -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/140x140x3.png" alt="140x140x3" width="140" height="140" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 SUBHEADING -->
																																									<td align="center" class="heading" style="color:#b8a48d; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:32px; line-height:42px; letter-spacing:2px; mso-line-height-rule:exactly;">
																																										Life
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										GET OFFERS
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT PACKAGES-2 CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																								   <td align="center" class="button-width">
																																										<!-- ID:BTN PACKAGES-2 BUTTON -->
																																										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																											<tr>
																																												<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																													<a href="#" style="color:#ffffff; text-decoration:none;">BOOK NOW</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-2 ENDS -->
		
		<!-- OUR PACKAGES-2 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR PACKAGES-2 BOTTOM SPACE ENDING -->
		
		<!-- OUR GALLERY TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR GALLERY TOP SPACE ENDING -->
		
		<!-- OUR GALLERY TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#b8a48d; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Have a Glance
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR GALLERY
																				</td>
																			</tr>
																			<tr>
																				<td height="30" style="mso-line-height-rule:exactly; line-height:30px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR GALLERY TITLE ENDS -->
		
		<!-- OUR GALLERY STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																		<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="580">
																											<tr>
																												<td align="center" valign="top" width="580">
																													<![endif]-->
																													<div style="display:inline-block; max-width:580px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE LEFT -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																		<tr>
																																			<td align="center">
																																				<div style="display:inline-block; max-width:260px; vertical-align:top; width:100%;" class="div-width">
																																					<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																						<tr>
																																							<td align="center">
																																								<table align="center" border="0" cellpadding="0" cellspacing="0" width="250" style="width:auto !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																									<tr>
																																										<td align="center" width="250" style="padding:0 5px; font-size:0; line-height:400px;">
																																											<img src="https://www.pennyblacktemplates.com/demo/emily/images/250x400.jpg" alt="250x400" width="250" height="400" style="color:#666666; width:100%; max-width:100%; margin:0; padding:0; border:0; display:block; height:auto;" />
																																										</td>
																																									</tr>
																																								</table>
																																							</td>
																																						</tr>
																																					</table>
																																				</div>
																																			</td>
																																			<td align="center">
																																				<div style="display:inline-block; max-width:320px; vertical-align:top; width:100%;" class="div-width">
																																					<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																						<tr>
																																							<td align="center">
																																								<table align="center" border="0" cellpadding="0" cellspacing="0" width="310" style="width:auto !important; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																									<tr>
																																										<td align="center" width="310" style="padding:0 5px; font-size:0; line-height:200px;">
																																											<img src="https://www.pennyblacktemplates.com/demo/emily/images/310x220.jpg" alt="310x220" width="310" height="220" style="color:#666666; width:100%; max-width:100%; margin:0; padding:0; border:0; display:block; height:auto;" />
																																										</td>
																																									</tr>
																																								</table>
																																							</td>
																																						</tr>
																																						<tr>
																																							<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																						</tr>
																																						<tr>
																																							<td align="center">
																																								<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																									<tr>
																																										<td align="center" width="150" style="padding:0 5px; font-size:0; line-height:170px;">
																																											<img src="https://www.pennyblacktemplates.com/demo/emily/images/150x170x1.jpg" alt="150x170x1" width="150" height="170" style="color:#666666; max-width:100%; margin:0; padding:0; border:0; display:block; height:auto;" />
																																										</td>
																																										<td align="center" width="150" style="padding:0 5px; font-size:0; line-height:170px;">
																																											<img src="https://www.pennyblacktemplates.com/demo/emily/images/150x170x2.jpg" alt="150x170x2" width="150" height="170" style="color:#666666; max-width:100%; margin:0; padding:0; border:0; display:block; height:auto;" />
																																										</td>
																																									</tr>
																																								</table>
																																							</td>
																																						</tr>
																																					</table>
																																				</div>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																														</table>
																													</div>	
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR GALLERY ENDS -->
		
		<!-- OUR GALLERY BUTTON STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
										<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
											<!-- ID:BG SECTION-1 -->
											<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
												<tbody>	
													<tr>
														<td align="center" class="padding">
															<!--[if mso]>
															<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																<tr>
																	<td align="center">
																		<![endif]-->
																		<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																			<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																				<tr>
																					<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																				</tr>
																				<tr>
																				   <td align="center" class="button-width">
																						<!-- ID:BTN COMMON BUTTON -->
																						<table align="center" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																							<tr>
																								<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																									<a href="#" style="color:#ffffff; text-decoration:none;">VIEW MORE</a>
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																				<tr>
																					<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																				</tr>
																			</table>
																		</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
															<![endif]-->
														</td>
													</tr>
												</tbody>	
											</table>
										</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR GALLERY BUTTON ENDS -->
		
		<!-- OUR GALLERY BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR GALLERY BOTTOM SPACE ENDING -->
		
		<!-- APPOINTMENT STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG APPOINTMENT OPTIONAL -->
									<table align="center" bgcolor="#000000" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center">
												<!--[if gte mso 9]>
												<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:569px; margin:auto;">
												<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/800x700.jpg" color="#f6f8f7" />
												<v:textbox inset="0,0,0,0">
												<![endif]-->
												<div style="margin:auto;">
													<table align="center" background="https://www.pennyblacktemplates.com/demo/emily/images/800x700.jpg" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/800x700.jpg); background-position:center; background-repeat:no-repeat;">
														<tr>
															<td align="center" class="padding">
																<!--[if (gte mso 9)|(IE)]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
																	<tr>
																		<td align="center" valign="top" width="600">
																			<![endif]-->
																			<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="200" style="mso-line-height-rule: exactly; line-height: 200px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="center">
																							<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="90%" style="width:90%; max-width:90%;">
																								<tr>
																									<!-- ID:TXT APPOINTMENT SUBTITLE -->
																									<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:40px; font-weight:700; letter-spacing:2px; line-height:50px;">
																										Enrich Your Beauty
																									</td>
																								</tr>
																								<tr>
																									<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																								</tr>
																								<tr>
																									<!-- ID:TXT APPOINTMENT TITLE -->
																									<td align="center" class="MsoNormal res-font" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:38px; font-weight:600; letter-spacing:1px; line-height:48px;">
																										GET APPOINTMENT
																									</td>
																								</tr>
																								<tr>
																									<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																								</tr>
																								<tr>
																								   <td align="center" class="button-width">
																										<!-- ID:BG APPOINTMENT BUTTON -->
																										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																											<tr>
																												<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																													<a href="#" style="color:#ffffff; text-decoration:none;">GET APPOINTMENT</a>
																												</td>
																											</tr>
																										</table>
																									</td>
																								</tr>
																							</table>		
																						</td>
																					</tr>
																					<tr>
																						<td height="200" style="mso-line-height-rule: exactly; line-height: 200px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if (gte mso 9)|(IE)]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</table>
												</div>
												<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->	
											</td>
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- APPOINTMENT ENDS -->
		
		<!-- OUR TEAM TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TEAM TOP SPACE ENDING -->
		
		<!-- OUR TEAM TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Meet Our Team
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					NATURAL CARE BEAUTICIANS
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TEAM TITLE ENDS -->
		
		<!-- OUR TEAM STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td align="center">
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																										<tr>
																											<td align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG TEAM -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/120x120x1.png" alt="120x120x1" width="120" height="120" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM NAME -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										AFRIN EMILY
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM DESG -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:12px; line-height:22px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										THERAPIST
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>		
																																									<td align="center">
																																										<table align="center" border="0" cellspacing="0" cellpadding="0" style="width:auto !important;">
																																											<tr>
																																												<!-- ID:TXT TEAM NAME -->
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x1.png" alt="25x25x1" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x2.png" alt="25x25x2" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x3.png" alt="25x25x3" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG TEAM -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/120x120x2.png" alt="120x120x2" width="120" height="120" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM NAME -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										JENCY WILLIAM
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM DESG -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:12px; line-height:22px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										SPECIALIST
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>		
																																									<td align="center">
																																										<table align="center" border="0" cellspacing="0" cellpadding="0" style="width:auto !important;">
																																											<tr>
																																												<!-- ID:TXT TEAM NAME -->
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x1.png" alt="25x25x1" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x2.png" alt="25x25x2" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x3.png" alt="25x25x3" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG TEAM -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/120x120x3.png" alt="120x120x3" width="120" height="120" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM NAME -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										JOY SMITH
																																									</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM DESG -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:12px; line-height:22px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										THERAPIST
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT TEAM CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																								</tr>
																																								<tr>		
																																									<td align="center">
																																										<table align="center" border="0" cellspacing="0" cellpadding="0" style="width:auto !important;">
																																											<tr>
																																												<!-- ID:TXT TEAM NAME -->
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x1.png" alt="25x25x1" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x2.png" alt="25x25x2" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																												<td width="10">&nbsp;</td>
																																												
																																												<td align="left" width="25" valign="middle">
																																													<a href="#" style="color:#666666;text-decoration:none;">
																																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/25x25x3.png" alt="25x25x3" width="25" height="25" style="margin:0; border:0;" />
																																													</a>
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TEAM ENDS -->
		
		<!-- OUR TEAM BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TEAM BOTTOM SPACE ENDING -->
		
		<!-- FAQ STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG FAQ OPTIONAL -->
												<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center">
																<!--[if gte mso 9]>
																<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:645px; margin:auto;">
																<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/800x1310.jpg" color="#f6f8f7" />
																<v:textbox inset="0,0,0,0">
																<![endif]-->
																<div style="margin:auto;">
																	<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/800x1310.jpg" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/800x1310.jpg); background-position:center; background-repeat:no-repeat;">
																		<tr>
																			<td align="center" class="padding">
																				<!--[if mso]>
																				<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																					<tr>
																						<td align="center">
																							<![endif]-->
																							<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																								<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																									<tr>
																										<td height="60" style="mso-line-height-rule:exactly; line-height:60px; font-size:0;">&nbsp;</td>
																									</tr>
																									<tr>
																										<!-- ID:TXT FAQ SUBTITLE -->
																										<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																											Clarify Your Question
																										</td>
																									</tr>
																									<tr>
																										<!-- ID:TXT FAQ TITLE -->
																										<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																											FREQUNETLY ASKED QUESTIONS
																										</td>
																									</tr>
																									<tr>
																										<td height="30" style="mso-line-height-rule:exactly; line-height:30px; font-size:0;">&nbsp;</td>
																									</tr>
																									<tr>
																										<td align="center">
																											<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="90%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:90% !important; max-width:90% !important;">
																												<tr>
																													<td>
																														<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																															<tr>
																																<!-- ID:TXT FAQ HEADING -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																	<a href="#" style="text-decoration:none; color:#666666;">WHAT ARE THE SERVICES WE ARE OFFERING?</a>
																																</td>
																															</tr>
																															<tr>
																																<!-- ID:BR FAQ HEADING BORDER -->
																																<td height="10" style="border-bottom:1px solid #e5e5e5; mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT FAQ CONTENT -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan. Pellentesque vel suscipit dolor. Integer et dapibus nibh.
																																</td>
																															</tr>
																															<tr>
																																<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																															</tr>
																														</table>					
																													</td>
																												</tr>
																												<!-- 2ND ROW -->
																												<tr>
																													<td>
																														<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																															<tr>
																																<!-- ID:TXT FAQ HEADING -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																	<a href="#" style="text-decoration:none; color:#666666;">WHAT ARE THE PLANS AVAILABLE?</a>
																																</td>
																															</tr>
																															<tr>
																																<!-- ID:BR FAQ HEADING BORDER -->
																																<td height="10" style="border-bottom:1px solid #e5e5e5; mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT FAQ CONTENT -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan. Pellentesque vel suscipit dolor. Integer et dapibus nibh.
																																</td>
																															</tr>
																															<tr>
																																<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																															</tr>
																														</table>					
																													</td>
																												</tr>
																												<!-- 3RD ROW -->
																												<tr>
																													<td>
																														<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																															<tr>
																																<!-- ID:TXT FAQ HEADING -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																	<a href="#" style="text-decoration:none; color:#666666;">HOW CAN I PAY THE MONEY FOR THE SERVICES?</a>
																																</td>
																															</tr>
																															<tr>
																																<!-- ID:BR FAQ HEADING BORDER -->
																																<td height="10" style="border-bottom:1px solid #e5e5e5; mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT FAQ CONTENT -->
																																<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan. Pellentesque vel suscipit dolor. Integer et dapibus nibh.
																																</td>
																															</tr>
																														</table>					
																													</td>
																												</tr>
																											</table>
																										</td>
																									</tr>
																									<tr>
																										<td height="60" style="mso-line-height-rule:exactly; line-height:60px; font-size:0;">&nbsp;</td>
																									</tr>
																								</table>
																							</div>
																							<!--[if mso]>
																						</td>
																					</tr>
																				</table>
																				<![endif]-->
																			</td>
																		</tr>
																	</table>
																</div>
																<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FAQ ENDS -->
		
		<!-- CTA STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG CTA OPTIONAL -->
									<table align="center" border="0" bgcolor="#000000" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center">
												<!--[if gte mso 9]>
												<v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:800px; height:566px; margin:auto;">
												<v:fill type="frame" src="https://www.pennyblacktemplates.com/demo/emily/images/800x680.jpg" color="#f6f8f7" />
												<v:textbox inset="0,0,0,0">
												<![endif]-->
												<div style="margin:auto;">
													<table align="center" border="0" background="https://www.pennyblacktemplates.com/demo/emily/images/800x680.jpg" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="background-image:url(https://www.pennyblacktemplates.com/demo/emily/images/800x680.jpg); background-position:center; background-repeat:no-repeat;">
														<tr>
															<td align="center" class="padding">
																<!--[if (gte mso 9)|(IE)]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
																	<tr>
																		<td align="center" valign="top" width="600">
																			<![endif]-->
																			<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="right" style="padding:0 10px;">
																							<!--[if (gte mso 9)|(IE)]>
																							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="right" width="100%" style="width: 100%;">
																								<tr>
																									<td width="180">&nbsp;</td>
																									<td align="right" valign="top" width="420" style="width:420px;">
																										<![endif]-->
																										<div style="display:inline-block; width:100%; max-width:420px; vertical-align:top;">
																											<table align="left" border="0" class="display-width-child" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																												<tr>
																													<!-- ID:TXT CTA SUBTITLE -->
																													<td align="left" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:40px; line-height:50px; font-weight:700; letter-spacing:2px;">
																														Specialized In
																													</td>
																												</tr>
																												<tr>
																													<td height="5" style="mso-line-height-rule: exactly; line-height:5px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																													<!-- ID:TXT CTA TITLE -->
																													<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:38px; line-height:48px; font-weight:600; letter-spacing:1px;">
																														HERBAL PRODUCTS
																													</td>
																												</tr>
																												<tr>
																													<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																													<!-- ID:TXT CTA CONTENT -->
																													<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; letter-spacing:1px; line-height:24px;">
																														Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie accumsan.
																													</td>
																												</tr>	
																												<tr>
																													<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																												</tr>
																												<tr>
																												   <td align="left" class="button-width">
																														<!-- ID:BTN CTA BUTTON -->
																														<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																															<tr>
																																<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																	<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>
																											</table>
																										</div>
																										<!--[if (gte mso 9)|(IE)]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																					<tr>
																						<td height="160" style="mso-line-height-rule: exactly; line-height: 160px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if (gte mso 9)|(IE)]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</table>
												</div>
												<!--[if gte mso 9]> </v:textbox> </v:rect> <![endif]-->	
											</td>
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- CTA ENDS -->
		
		<!-- ELITE SERVICES TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- ELITE SERVICES TOP SPACE ENDING -->
		
		<!-- ELITE SERVICES TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Elite Services
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR ENHANCED SERVICES
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- ELITE SERVICES TITLE ENDS -->
		
		<!-- ELITE SERVICES STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tbody>
																				<tr>
																					<td align="center">
																						<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																							<tr>
																								<td align="center" style="font-size:0;">
																									<!--[if mso]>
																									<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																										<tr>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE LEFT -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																	<tr>
																																		<td align="center" width="64" valign="middle">
																																			<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x1.png" alt="64x64x1" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																		</td>
																																	</tr>	
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<!-- ID:TXT HEADING -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																			NATURAL SPA
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																	</tr>
																																	<tr>	
																																		<!-- ID:TXT CONTENT -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																			Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule: exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<td align="center">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																				<tr>
																																					<!-- ID:TXT COMMON BUTTON LINK -->
																																					<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																						<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																					</td>	
																																					<td width="5">&nbsp;</td>
																																					<td align="center" valign="middle" width="14" style="line-height:0px;">
																																						<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																						</a>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>	
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE CENTER -->
																													<table align="left" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																	<tr>
																																		<td align="center" width="64" valign="middle">
																																			<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x2.png" alt="64x64x2" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																		</td>
																																	</tr>	
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<!-- ID:TXT HEADING -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																			MASSAGE THERAPY
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																	</tr>
																																	<tr>	
																																		<!-- ID:TXT CONTENT -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																			Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule: exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<td align="center">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																				<tr>
																																					<!-- ID:TXT COMMON BUTTON LINK -->
																																					<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																						<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																					</td>	
																																					<td width="5">&nbsp;</td>
																																					<td align="center" valign="middle" width="14" style="line-height:0px;">
																																						<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																						</a>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																											<td align="center" valign="top" width="195">
																												<![endif]-->
																												<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																													<!-- TABLE RIGHT -->
																													<table align="right" border="0" class="display-width-child" cellspacing="0" cellpadding="0" width="100%" style="mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%; max-width:100%;">
																														<tr>
																															<td align="center" style="padding:15px 5px;">
																																<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																	<tr>
																																		<td align="center" width="64" valign="middle">
																																			<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x3.png" alt="64x64x3" width="64" height="64" style="color:#333333; margin:0; border:0; padding:0; display:block; height:auto;"/>
																																		</td>
																																	</tr>	
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule:exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<!-- ID:TXT HEADING -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																			SKIN CARE
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="5" style="font-size:0; mso-line-height-rule: exactly; line-height:5px;">&nbsp;</td>
																																	</tr>
																																	<tr>	
																																		<!-- ID:TXT CONTENT -->
																																		<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																			Lorem ipsum dolor sit amet, ipsum primis ligula cursus eget molestie.
																																		</td>
																																	</tr>
																																	<tr>
																																		<td height="10" style="font-size:0; mso-line-height-rule: exactly; line-height:10px;">&nbsp;</td>
																																	</tr>
																																	<tr>
																																		<td align="center">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																				<tr>
																																					<!-- ID:TXT COMMON BUTTON LINK -->
																																					<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																						<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																					</td>	
																																					<td width="5">&nbsp;</td>
																																					<td align="center" valign="middle" width="14" style="line-height:0px;">
																																						<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																						</a>
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</td>
																														</tr>
																													</table>
																												</div>
																												<!--[if mso]>
																											</td>
																										</tr>
																									</table>
																									<![endif]-->
																								</td>
																							</tr>
																						</table>
																					</td>
																				</tr>
																			</tbody>	
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- ELITE SERVICES ENDS -->
		
		<!-- ELITE SERVICES BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- ELITE SERVICES BOTTOM SPACE ENDING -->
		
		<!-- COUNTER TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- COUNTER TOP SPACE ENDING -->
		
		<!-- COUNTER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center" style="font-size:0;">
					<!--[if (gte mso 9)|(IE)]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG SECTION-2 -->
									<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<td align="center" class="padding">
												<!--[if (gte mso 9)|(IE)]>
												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
													<tr>
														<td align="center" valign="top" width="600">
															<![endif]-->
															<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																	<tr>
																		<td>
																			<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																				<tr>
																					<td align="center" style="font-size:0;">
																						<!--[if (gte mso 9)|(IE)]>
																						<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																							<tr>
																								<td align="center" valign="top" width="180">
																									<![endif]-->
																									<div style="display:inline-block; max-width:180px; vertical-align:top; width:100%;" class="div-width">
																										<!-- TABLE LEFT -->	
																										<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																											<tr>		
																												<td align="center" style="padding:15px 10px;">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100% !important;">
																														<tr>
																															<!-- ID:TXT COUNTER VALUE -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:34px; line-height:44px; letter-spacing:1px;">
																																2000
																															</td>
																														</tr>
																														<tr>
																															<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>
																															<!-- ID:TXT COUNTER HEADING -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																<a href="#" style="text-decoration:none; color:#666666;">THERAPY DONE</a>
																															</td>
																														</tr>
																														<tr>
																															<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>	
																															<!-- ID:TXT COUNTER CONTENT -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																Lorem ipsum dolor sit amet ipsum elit.
																															</td>
																														</tr>
																													</table>			
																												</td>
																											</tr>
																										</table>
																									</div>	
																						
																									<!--[if (gte mso 9)|(IE)]>
																								</td>
																								<td align="center" valign="top" width="180">
																									<![endif]-->
																									<div style="display:inline-block; max-width:180px; vertical-align:top; width:100%;" class="div-width">
																										<!-- TABLE CENTER -->	
																										<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																											<tr>		
																												<td align="center" style="padding:15px 10px;">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100% !important;">
																														<tr>
																															<!-- ID:TXT COUNTER VALUE -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:34px; line-height:44px; letter-spacing:1px;">
																																1200
																															</td>
																														</tr>
																														<tr>
																															<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>
																															<!-- ID:TXT COUNTER HEADING -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																<a href="#" style="text-decoration:none; color:#666666;">PROCEDURE</a>
																															</td>
																														</tr>
																														<tr>
																															<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>	
																															<!-- ID:TXT COUNTER CONTENT -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																Lorem ipsum dolor sit amet ipsum elit.
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</table>
																									</div>
																									<!--[if (gte mso 9)|(IE)]>
																								</td>
																								<td align="center" valign="top" width="180">
																									<![endif]-->
																									<div style="display:inline-block; max-width:180px; vertical-align:top; width:100%;" class="div-width">
																										<!-- TABLE RIGHT -->	
																										<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																											<tr>		
																												<td align="center" style="padding:15px 10px;">
																													<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100% !important;">
																														<tr>
																															<!-- ID:TXT COUNTER VALUE -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:34px; line-height:44px; letter-spacing:1px;">
																																3500
																															</td>
																														</tr>
																														<tr>
																															<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>
																															<!-- ID:TXT COUNTER HEADING -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																<a href="#" style="text-decoration:none; color:#666666;">HAPPY CLIENTS</a>
																															</td>
																														</tr>
																														<tr>
																															<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																														</tr>
																														<tr>	
																															<!-- ID:TXT COUNTER CONTENT -->
																															<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																Lorem ipsum dolor sit amet ipsum elit .
																															</td>
																														</tr>
																													</table>
																												</td>
																											</tr>
																										</table>
																									</div>
																									<!--[if mso]>
																								</td>
																							</tr>
																						</table>
																						<![endif]-->		
																					</td>
																				</tr>
																			</table>
																		</td>
																	</tr>
																</table>
															</div>
															<!--[if (gte mso 9)|(IE)]>
														</td>
													</tr>
												</table>
												<![endif]-->
															
											</td>		
										</tr>
									</table>
								</div>
								<!--[if (gte mso 9)|(IE)]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- COUNTER ENDS -->
		
		<!-- COUNTER BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- COUNTER BOTTOM SPACE ENDING -->
		
		<!-- TREATMENT TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- TREATMENT TOP SPACE ENDING -->
		
		<!-- TREATMENT STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																			<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																											<tr>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE LEFT -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td align="left" style="color:#666666;" width="272">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x330.jpg" alt="272x330" width="272" height="330" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:auto;" />
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>	
																										
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE RIGHT -->	
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<!-- ID:TXT SUBTITLE-1 -->
																																			<td align="left" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:32px; line-height:42px; letter-spacing:2px; mso-line-height-rule:exactly;">
																																				Experience the Caring
																																			</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 2COL HEADING -->
																																			<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:24px; line-height:34px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																				GET THE BEST TREATMENT
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT CONTENT -->
																																			<td align="left" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus, eget molestie diam accumsan. Pellentesque vel suscipit dolor. Integer et dapibus nibh ante ipsum primis.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="20" style="mso-line-height-rule: exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																		   <td align="left" class="button-width">
																																				<!-- ID:BTN COMMON BUTTON -->
																																				<table align="left" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border-radius:50px;">
																																					<tr>
																																						<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if mso]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- TREATMENT ENDS -->
		
		<!-- TREATMENT BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- TREATMENT BOTTOM SPACE ENDING -->
		
		<!-- 3-COLUMN ICON TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN ICON TOP SPACE ENDING -->
		
		<!-- 3-COLUMN ICON STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td align="center">
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																										<tr>
																											<td align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG 3-COL ICON -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="max-width:90% !important; width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x4.png" alt="64x64x4" width="64" height="64" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										<a href="#" style="text-decoration:none; color:#666666;">STONE MASSAGE</a>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE CENTER -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG 3-COL ICON -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="max-width:90% !important; width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x5.png" alt="64x64x5" width="64" height="64" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										<a href="#" style="text-decoration:none; color:#666666;">SKIN THERAPY</a>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 5px;">
																																			<!-- ID:BG 3-COL ICON -->
																																			<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																																				<tbody>	
																																					<tr>
																																						<td align="center">
																																							<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="max-width:90% !important; width:90% !important;">
																																								<tr>
																																									<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<td align="center" style="line-height:0; font-size:0;">
																																										<img src="https://www.pennyblacktemplates.com/demo/emily/images/64x64x6.png" alt="64x64x6" width="64" height="64" style="color:#ffffff; margin:0; border:0; padding:0; display:block;" />
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON HEADING -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																										<a href="#" style="text-decoration:none; color:#666666;">OIL MASSAGE</a>
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																								</tr>
																																								<tr>
																																									<!-- ID:TXT 3-COL ICON CONTENT -->
																																									<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																										Lorem ipsum dolor sit amet elit. Duis vehicula dui ligula cursus eget.
																																									</td>
																																								</tr>
																																								<tr>
																																									<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																																								</tr>
																																							</table>
																																						</td>
																																					</tr>
																																				</tbody>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN ICON ENDS -->
		
		<!-- 3-COLUMN ICON BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN ICON BOTTOM SPACE ENDING -->
		
		<!-- OUR TESTIMONIAL TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TESTIMONIAL TOP SPACE ENDING -->
		
		<!-- OUR TESTIMONIAL TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Our Success Stories
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR TESTIMONIAL
																				</td>
																			</tr>
																			<tr>
																				<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TESTIMONIAL TITLE ENDS -->
		
		<!-- OUR TESTIMONIAL STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if (gte mso 9)|(IE)]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tr>
												<td align="center" class="padding">
													<!--[if (gte mso 9)|(IE)]>
													<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
														<tr>
															<td align="center" valign="top" width="600">
																<![endif]-->
																<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																	<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																		<tr>
																			<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																		</tr>
																		<tr>
																			<td align="center" style="color:#666666; line-height:0; font-size:0;">
																				<img src="https://www.pennyblacktemplates.com/demo/emily/images/100x100.png" alt="100x100" width="100" height="100" style="margin:0; border:0; padding:0; display:block;" />
																			</td>
																		</tr>
																		<tr>
																			<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																		</tr>
																		<tr>
																			<td align="left" style="padding:0 10px;"> 
																				<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																					<tr>
																						<!-- ID:TXT TESTIMONIAL CONTENT -->
																						<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;  font-size:14px; line-height:24px; font-weight:300; font-style:italic;">
																							Lorem ipsum sodales orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean a arcu ullamcorper suscipit.
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																		<tr>
																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																		</tr>
																		<tr>
																			<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:14px; line-height:24px; letter-spacing:1px;">
																				<span class="txt-testimo-name">ALISSA,</span><span style="font-size:13px; font-weight:300;" class="txt-testimo-work"> New Jersy </span>
																			</td>
																		</tr>
																		<tr>
																			<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																		</tr>
																	</table>
																</div>
																<!--[if (gte mso 9)|(IE)]>
															</td>
														</tr>
													</table>
													<![endif]-->
																
												</td>
											</tr>
										</table>
									</div>
									<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>	
		<!-- OUR TESTIMONIAL ENDS -->
		
		<!-- OUR TESTIMONIAL BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR TESTIMONIAL BOTTOM SPACE ENDING -->
		
		<!-- AWESOME FEATURES TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-3 -->
										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- AWESOME FEATURES TOP SPACE ENDING -->
		
		<!-- AWESOME FEATURES STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-3 -->
										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																			<tr>
																				<td>
																					<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																						<tr>
																							<td align="center" style="font-size:0;">
																								<!--[if mso]>
																								<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																									<tr>
																										<td align="center" valign="top" width="292">
																											<![endif]-->
																											<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																												<!--TABLE LEFT-->
																												<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" class="display-width-child" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																													<tr>
																														<td align="left" style="padding:5px 10px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																<tr>
																																	<td align="left">
																																		<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																			<tr>
																																				<td align="left" style="color:#666666;" width="272">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x370.jpg" alt="272x370" width="272" height="370" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block;" />
																																				</td>
																																			</tr>
																																		</table>
																																	</td>
																																</tr>
																															</table>
																														</td>
																													</tr>	
																												</table>
																											</div>	
																											<!--[if mso]>
																										</td>
																										<td align="center" valign="top" width="292">
																											<![endif]-->
																											<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																												<!-- TABLE RIGHT -->	
																												<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																													<tr>
																														<td align="left" style="padding:5px 10px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																<tr>
																																	<!-- ID:TXT FEAT HEADING -->
																																	<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:24px; line-height:34px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																		<a href="#" style="text-decoration:none; color:#ffffff;">AWESOME FEATURES</a>
																																	</td>
																																</tr>
																																<tr>
																																	<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td align="center"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="left" valign="top" width="63">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x4.png" alt="48x48x4" width="48" height="48" style="border:0; margin:0; padding:0; display:block;" />
																																				</td>
																																				<td>
																																					<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																						<tbody>
																																							<tr>
																																								<!-- ID:TXT FEAT SUBHEADING -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:14px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																									HAIRCUT &amp; STYLING
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT FEAT CONTENT -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet elit. Duis vehicula ligula nibh.
																																								</td>
																																							</tr>	
																																						</tbody>
																																					</table>
																																				</td>
																																			</tr>
																																		</table>
																																	</td>
																																</tr>
																																<tr>
																																	<!-- ID:TXT FEAT BORDER -->
																																	<td height="20" style="border-bottom:1px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td align="center"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="left" valign="top" width="63">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x5.png" alt="48x48x5" width="48" height="48" style="border:0; margin:0; padding:0; display:block;" />
																																				</td>
																																				<td>
																																					<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																						<tbody>
																																							<tr>
																																								<!-- ID:TXT FEAT SUBHEADING -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:14px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																									MANICURE &amp; PEDICURE
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT FEAT CONTENT -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet elit. Duis vehicula ligula nibh.
																																								</td>
																																							</tr>	
																																						</tbody>
																																					</table>
																																				</td>
																																			</tr>
																																		</table>
																																	</td>
																																</tr>
																																<tr>
																																	<!-- ID:TXT FEAT BORDER -->
																																	<td height="20" style="border-bottom:1px solid #cccccc; font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td height="20" style="font-size:0; mso-line-height-rule:exactly; line-height:20px;">&nbsp;</td>
																																</tr>
																																<tr>
																																	<td align="center"> 
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																			<tr>
																																				<td align="left" valign="top" width="63">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x6.png" alt="48x48x6" width="48" height="48" style="border:0; margin:0; padding:0; display:block;" />
																																				</td>
																																				<td>
																																					<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
																																						<tbody>
																																							<tr>
																																								<!-- ID:TXT FEAT SUBHEADING -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:14px; letter-spacing:1px; mso-line-height-rule: exactly;">
																																									BODY TREATMENT
																																								</td>
																																							</tr>
																																							<tr>
																																								<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																							</tr>
																																							<tr>
																																								<!-- ID:TXT FEAT CONTENT -->
																																								<td align="left" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																									Lorem ipsum dolor sit amet elit. Duis vehicula ligula nibh.
																																								</td>
																																							</tr>	
																																						</tbody>
																																					</table>
																																				</td>
																																			</tr>
																																		</table>	
																																	</td>
																																</tr>
																															</table>
																														</td>
																													</tr>
																												</table>
																											</div>
																											<!--[if mso]>
																										</td>
																									</tr>
																								</table>
																								<![endif]-->
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																	</td>
																</tr>
															</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- AWESOME FEATURES ENDS -->
		
		<!-- AWESOME FEATURES BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-3 -->
										<table align="center" border="0" bgcolor="#B1A684" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- AWESOME FEATURES BOTTOM SPACE ENDING -->
		
		<!-- 2-COLUMN-1 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-1 TOP SPACE ENDING -->
		
		<!-- 2-COLUMN-1 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																			<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" dir="rtl" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																											<tr>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE RIGHT -->	
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<td align="center">
																																				<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td align="left" style="color:#666666;" width="272">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x180x1.jpg" alt="272x180x1" width="272" height="180" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:auto;" />
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>	
																										
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE LEFT -->	
																														<table align="left" border="0" dir="ltr" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<!-- ID:TXT 2COL HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:24px; line-height:34px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																				COME &amp; REDUCE YOUR STRESS
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula amet ligula cursus eget.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT COMMON BUTTON LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if mso]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-1 ENDS -->
		
		<!-- 2-COLUMN-1 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-1 BOTTOM SPACE ENDING -->
		
		<!-- 2-COLUMN-2 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-2 TOP SPACE ENDING -->
		
		<!-- 2-COLUMN-2 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																			<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td>
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																											<tr>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE LEFT -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<td align="center">
																																				<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<td align="left" style="color:#666666;" width="272">
																																							<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x180x2.jpg" alt="272x180x2" width="272" height="180" style="margin:0; border:0; padding:0; width:100%; max-width:100%; display:block; height:auto;" />
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>	
																										
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="292">
																													<![endif]-->
																													<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE RIGHT -->	
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:5px 10px;">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																		<tr>
																																			<!-- ID:TXT 2COL HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:24px; line-height:34px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																				DESIGN YOUR NAILS WITH MULTI COLORS
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula amet ligula cursus eget.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT COMMON BUTTON LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</div>
																			<!--[if mso]>
																		</td>
																	</tr>
																</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-2 ENDS -->
		
		<!-- 2-COLUMN-2 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-2 BOTTOM SPACE ENDING -->
		
		<!-- 3-COLUMN TEXT TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN TEXT TOP SPACE ENDING -->
		
		<!-- 3-COLUMN TEXT-1 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
											<tr>
												<td align="center" class="padding">
													<!--[if mso]>
													<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
														<tr>
															<td align="center" valign="top" width="600">
																<![endif]-->
																<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																	<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																		<tr>
																			<td align="center">
																				<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																					<tr>
																						<td align="center" style="font-size:0;">
																							<!--[if mso]>
																							<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																								<tr>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE LEFT -->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT -->
																														<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				FACIAL
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE CENTER -->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT-1 -->
																														<table align="center" bgcolor="#B1A684" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				MASSAGE
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT-1 BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x2.png" alt="14x14x2" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE RIGHT -->
																											<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT -->
																														<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				MANICURE
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</div>
																<!--[if mso]>
															</td>
														</tr>
													</table>
													<![endif]-->
												</td>
											</tr>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 3-COLUMN TEXT-1 ENDS -->
		
		<!-- 3-COLUMN TEXT-2 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
											<tr>
												<td align="center" class="padding">
													<!--[if mso]>
													<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
														<tr>
															<td align="center" valign="top" width="600">
																<![endif]-->
																<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																	<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																		<tr>
																			<td align="center">
																				<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																					<tr>
																						<td align="center" style="font-size:0;">
																							<!--[if mso]>
																							<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																								<tr>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE LEFT -->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT-1 -->
																														<table align="center" bgcolor="#B1A684" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				PEDICURE
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT-1 BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x2.png" alt="14x14x2" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE CENTER -->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT -->
																														<table align="center" bgcolor="#ffffff" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				HAIR STYLING
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="195">
																										<![endif]-->
																										<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE RIGHT -->
																											<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:5px;">
																														<!-- ID:BG 3-COL-TEXT-1 -->
																														<table align="center" bgcolor="#B1A684" class="width282" border="0" cellpadding="0" width="100%" cellspacing="0" style="max-width:100%;">
																															<tr>
																																<td align="center">
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" width="90%" style="width:90% !important; max-width:90% !important;">
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 HEADING -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																				STEAM BATH
																																			</td>		
																																		</tr>
																																		<tr>
																																			<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<!-- ID:TXT 3-COL-TEXT-1 CONTENT -->
																																			<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																				Lorem ipsum dolor amet sit elit. Duis ligula cursus eget molestie.
																																			</td>
																																		</tr>
																																		<tr>
																																			<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																																		</tr>
																																		<tr>
																																			<td align="left" class="res-center">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																					<tr>
																																						<!-- ID:TXT 3-COL-TEXT-1 BUTN LINK -->
																																						<td align="left" valign="middle" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none;">READ MORE</a> 
																																						</td>	
																																						<td width="5">&nbsp;</td>
																																						<td align="center" valign="middle" width="14" style="line-height:0px;">
																																							<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																								<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x2.png" alt="14x14x2" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																							</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>	
																																		<tr>
																																			<td height="20" style="line-height:20px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</div>
																<!--[if mso]>
															</td>
														</tr>
													</table>
													<![endif]-->
												</td>
											</tr>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 3-COLUMN TEXT-2 ENDS -->
		
		<!-- 3-COLUMN TEXT BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="55" style="mso-line-height-rule:exactly; line-height:55px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN TEXT BOTTOM SPACE ENDING -->
		
		<!-- 2-COLUMN-3 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-3 TOP SPACE ENDING -->
		
		<!-- 2-COLUMN-3 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px;">
											<tr>
												<td align="center" class="padding">
													<!--[if mso]>
													<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
														<tr>
															<td align="center" valign="top" width="600">
																<![endif]-->
																<div style="display:inline-block;width:100%; max-width:600px; vertical-align:top;" class="main-width">
																	<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																		<tr>
																			<td align="center">
																				<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																					<tr>
																						<td align="center" style="font-size:0;">
																							<!--[if mso]>
																							<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																								<tr>
																									<td align="center" valign="top" width="292">
																										<![endif]-->
																										<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE LEFT -->
																											<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:15px 10px;">
																														<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																															<tr>
																																<td align="left" class="res-center">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="width:auto !important;">
																																		<tr>
																																			<td align="left" width="272">
																																				<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x180x3.jpg" alt="272x180x3" width="272" style="color:#333333; width:100%; max-width:100%; height:auto; display:block;" />
																																			</td>
																																		</tr>							
																																	</table>
																																</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT HEADING -->
																																<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																	NATURAL CURE FOR STRESS
																																</td>		
																															</tr>
																															<tr>
																																<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT CONTENT -->
																																<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus.
																																</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td align="left" class="res-center">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																		<tr>
																																			<!-- ID:TXT COMMON BUTTON LINK -->
																																			<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																				<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																			</td>	
																																			<td width="5">&nbsp;</td>
																																			<td align="center" valign="middle" width="14" style="line-height:0px;">
																																				<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																				</a>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																									<td align="center" valign="top" width="292">
																										<![endif]-->
																										<div style="display:inline-block; max-width:292px; vertical-align:top; width:100%;" class="div-width">
																											<!-- TABLE RIGHT -->
																											<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																												<tr>
																													<td align="center" style="padding:15px 10px;">
																														<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																															<tr>
																																<td align="left" class="res-center">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="width:auto !important;">
																																		<tr>
																																			<td align="left" width="272">
																																				<img src="https://www.pennyblacktemplates.com/demo/emily/images/272x180x4.jpg" alt="272x180x4" width="272" style="color:#333333; width:100%; max-width:100%; height:auto; display:block;" />
																																			</td>
																																		</tr>							
																																	</table>
																																</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT HEADING -->
																																<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px;">
																																	COME &amp; STAY HEALTHY
																																</td>		
																															</tr>
																															<tr>
																																<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<!-- ID:TXT CONTENT -->
																																<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; font-weight:300; line-height:24px;">
																																	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula dui sit amet ligula cursus.
																																</td>
																															</tr>
																															<tr>
																																<td height="10" style="mso-line-height-rule: exactly; line-height:10px; font-size:0;">&nbsp;</td>
																															</tr>
																															<tr>
																																<td align="left" class="res-center">
																																	<table align="left" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
																																		<tr>
																																			<!-- ID:TXT COMMON BUTTON LINK -->
																																			<td align="left" valign="middle" class="MsoNormal" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:12px; letter-spacing:1px;">
																																				<a href="#" style="color:#B1A684; text-decoration:none;">READ MORE</a> 
																																			</td>	
																																			<td width="5">&nbsp;</td>
																																			<td align="center" valign="middle" width="14" style="line-height:0px;">
																																				<a href="#" style="color:#ffffff; text-decoration:none; line-height:0px;">
																																					<img src="https://www.pennyblacktemplates.com/demo/emily/images/14x14x1.png" alt="14x14x1" width="14" height="14" style="margin:0; border:0; padding:0; display:block;"/>
																																				</a>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>	
																														</table>
																													</td>
																												</tr>						
																											</table>
																										</div>
																										<!--[if mso]>
																									</td>
																								</tr>
																							</table>
																							<![endif]-->
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</table>
																</div>
																<!--[if mso]>
															</td>
														</tr>
													</table>
													<![endif]-->
												</td>
											</tr>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- 2-COLUMN-3 ENDS -->
		
		<!-- 2-COLUMN-3 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 2-COLUMN-3 BOTTOM SPACE ENDING -->
		
		<!-- FLAT IMAGE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tr>
				<td align="center">
					<!--[if mso]>
					<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
						<tr>
							<td align="center" valign="top" width="800">
								<![endif]-->
								<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
									<!-- ID:BG FLAT IMAGE OPTIONAL -->
									<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
										<tr>
											<!-- ID:TXT TITLE -->
											<td align="left" width="800">
												<a href="#" style="color:#333333; text-decoration:none;"> 
													<img src="https://www.pennyblacktemplates.com/demo/emily/images/800x500.jpg" alt="800x500" width="800" height="500" style="margin:0; border:0; width:100%; max-width:100%; display:block; height:auto;"/>
												</a>
											</td>	
										</tr>
									</table>
								</div>
								<!--[if mso]>
							</td>
						</tr>
					</table>
					<![endif]-->
				</td>
			</tr>
		</table>	
		<!-- FLAT IMAGE ENDS -->
		
		<!-- 3-COLUMN-1 TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN-1 TOP SPACE ENDING -->
		
		<!-- 3-COLUMN-1 STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td align="center">
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																										<tr>
																											<td align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 10px;">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center" width="175" style="color:666666; line-height:0px;">
																																						<img src="https://www.pennyblacktemplates.com/demo/emily/images/175x200x1.jpg" alt="175x200x1" width="175" height="200" style="margin:0; border:0; padding:0; max-width:100%; display:block; height:auto;" />
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT HEADING -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																						<a href="#" style="text-decoration:none; color:#666666;">LOREM IPSUM</a>
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT CONTENT -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																						Lorem ipsum dolor sit amet elit. Duis vehicula ligula cursus eget.
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE CENTER -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 10px;">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center" width="175" style="color:666666; line-height:0px;">
																																						<img src="https://www.pennyblacktemplates.com/demo/emily/images/175x200x2.jpg" alt="175x200x2" width="175" height="200" style="margin:0; border:0; padding:0; max-width:100%; display:block; height:auto;" />
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT HEADING -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																						<a href="#" style="text-decoration:none; color:#666666;">LOREM IPSUM</a>
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT CONTENT -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																						Lorem ipsum dolor sit amet elit. Duis vehicula ligula cursus eget.
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="200">
																															<![endif]-->
																															<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" style="padding:15px 10px;">
																																			<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
																																				<tr>
																																					<td align="center" width="175" style="color:666666; line-height:0px;">
																																						<img src="https://www.pennyblacktemplates.com/demo/emily/images//175x200x3.jpg" alt="175x200x3" width="175" height="200" style="margin:0; border:0; padding:0; max-width:100%; display:block; height:auto;" />
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="10" style="line-height:10px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT HEADING -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; line-height:28px; letter-spacing:1px; mso-line-height-rule:exactly;">
																																						<a href="#" style="text-decoration:none; color:#666666;">LOREM IPSUM</a>
																																					</td>
																																				</tr>
																																				<tr>
																																					<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																				</tr>
																																				<tr>
																																					<!-- ID:TXT CONTENT -->
																																					<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																						Lorem ipsum dolor sit amet elit. Duis vehicula ligula cursus eget.
																																					</td>
																																				</tr>
																																			</table>
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN-1 ENDS -->
		
		<!-- 3-COLUMN-1 BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="45" style="mso-line-height-rule:exactly; line-height:45px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- 3-COLUMN-1 BOTTOM SPACE ENDING -->
		
		<!-- OUR CLIENTS TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS TOP SPACE ENDING -->
		
		<!-- OUR CLIENTS TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#B1A684; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Brands Trust Us
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR CLIENTS
																				</td>
																			</tr>
																			<tr>
																				<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS TITLE ENDS -->
		
		<!-- OUR CLIENTS STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-1 -->
												<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td>
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:0;">
																										<tr>
																											<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;">
																												<!--[if mso]>
																												<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE LEFT -->	
																																<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://www.pennyblacktemplates.com/demo/emily/images/130x100x1.png" alt="130x100x1" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://www.pennyblacktemplates.com/demo/emily/images/130x100x2.png" alt="130x100x2" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>	
																												
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="300">
																															<![endif]-->
																															<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" class="div-width">
																																<!-- TABLE RIGHT -->	
																																<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																	<tr>
																																		<td align="center" class="saf-table" width="100%" style="border-collapse:collapse; font-size:0; border-spacing:0;"> 
																																			<!--[if mso]>
																																			<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="300">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:300px; vertical-align:top; width:100%;" >
																																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																								<tr>
																																									<td align="center" style="border-collapse:collapse; font-size:0; padding:10px 0;">
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; width:auto !important; font-size:0;">
																																											<tr>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://www.pennyblacktemplates.com/demo/emily/images/130x100x3.png" alt="130x100x3" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																												<td align="left" style="padding:0 10px; border-collapse:collapse; color:#666666; font-size:0; line-height:0;" width="130">
																																													<img src="https://www.pennyblacktemplates.com/demo/emily/images/130x100x4.png" alt="130x100x4" width="130" height="100" style="margin:0; border:0; padding:0; width:100%; max-width:130px; display:block; height:auto;" />
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS ENDS -->
		
		<!-- OUR CLIENTS BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-1 -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR CLIENTS BOTTOM SPACE ENDING -->
		
		<!-- OUR BRANCHES TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR BRANCHES TOP SPACE ENDING -->
		
		<!-- OUR BRANCHES TITLE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT SUBTITLE -->
																				<td align="center" class="heading" style="color:#b8a48d; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:700; font-size:40px; line-height:50px; letter-spacing:2px;">
																					Where We Are
																				</td>
																			</tr>
																			<tr>
																				<!-- ID:TXT TITLE -->
																				<td align="center" class="MsoNormal" style="color:#666666; padding:0 5px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:600; font-size:32px; line-height:42px; letter-spacing:1px;">
																					OUR BRANCHES
																				</td>
																			</tr>
																			<tr>
																				<td height="20" style="mso-line-height-rule:exactly; line-height:20px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR BRANCHES TITLE ENDS -->
		
		<!-- OUR BRANCHES STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
							<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
								<tr>
									<td align="center" valign="top" width="100%" style="max-width:800px;">
										<![endif]-->
											<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
												<!-- ID:BG SECTION-2 -->
												<table align="center" bgcolor="#f6f6f6" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
													<tbody>	
														<tr>
															<td align="center" class="padding">
																<!--[if mso]>
																<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
																	<tr>
																		<td align="center">
																				<![endif]-->
																					<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																						<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																							<tr>
																								<td>
																									<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; font-size:0;">
																										<tr>
																											<td align="center" style="font-size:0;">
																												<!--[if mso]>
																												<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																													<tr>
																														<td align="center" valign="top" width="280">
																															<![endif]-->
																															<div style="display:inline-block; max-width:284px; vertical-align:top; width:100%;" class="div-width">
																																<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																	<tr>
																																		<td align="center" class="saf-table">
																																			<!--[if mso]>
																																			<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="140">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:140px; vertical-align:top; width:100%;">
																																							<!-- TABLE LEFT -->	
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																								<tr>
																																									<td align="center" style="padding:10px;"> 
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																											<tr>
																																												<!-- ID:TXT HEADING -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																													NEWYORK
																																												</td>
																																											</tr>
																																											<tr>
																																												<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																											</tr>
																																											<tr>
																																												<!-- ID:TXT CONTENT -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																													262,Settlers Lane 1st Street,<br/>Newyork-1086
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																					<td align="center" valign="top" width="140">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:140px; vertical-align:top; width:100%;">
																																							<!-- TABLE LEFT -->	
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																								<tr>
																																									<td align="center" style="padding:10px;"> 
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																											<tr>
																																												<!-- ID:TXT HEADING -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																													PARIS
																																												</td>
																																											</tr>
																																											<tr>
																																												<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																											</tr>
																																											<tr>
																																												<!-- ID:TXT CONTENT -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																													161,East Maury Ville Street,<br/>Paris-4589
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																														<td align="center" valign="top" width="280">
																															<![endif]-->
																															<div style="display:inline-block; max-width:284px; vertical-align:top; width:100%;" class="div-width">
																																<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-size:0;">
																																	<tr>
																																		<td align="center" class="saf-table">
																																			<!--[if mso]>
																																			<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																																				<tr>
																																					<td align="center" valign="top" width="140">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:140px; vertical-align:top; width:100%;">
																																							<!-- TABLE LEFT -->	
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																								<tr>
																																									<td align="center" style="padding:10px;"> 
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																											<tr>
																																												<!-- ID:TXT HEADING -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																													TOKYO
																																												</td>
																																											</tr>
																																											<tr>
																																												<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																											</tr>
																																											<tr>
																																												<!-- ID:TXT CONTENT -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																													863,West Cross 2nd Street,<br/>Tokyo-5683
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																					<td align="center" valign="top" width="140">
																																						<![endif]-->
																																						<div style="display:inline-block; max-width:140px; vertical-align:top; width:100%;">
																																							<!-- TABLE LEFT -->	
																																							<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																								<tr>
																																									<td align="center" style="padding:10px;"> 
																																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%;">
																																											<tr>
																																												<!-- ID:TXT HEADING -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:18px; font-weight:500; line-height:28px; letter-spacing:1px;">
																																													SYDNEY
																																												</td>
																																											</tr>
																																											<tr>
																																												<td height="5" style="mso-line-height-rule:exactly; line-height:5px; font-size:0;">&nbsp;</td>
																																											</tr>
																																											<tr>
																																												<!-- ID:TXT CONTENT -->
																																												<td align="center" class="MsoNormal" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300; letter-spacing:1px;">
																																													364,Park Avenue Street,<br/>Sydney-3476
																																												</td>
																																											</tr>
																																										</table>
																																									</td>
																																								</tr>
																																							</table>
																																						</div>
																																						<!--[if mso]>
																																					</td>
																																				</tr>
																																			</table>
																																			<![endif]-->
																																		</td>
																																	</tr>
																																</table>
																															</div>
																															<!--[if mso]>
																														</td>
																													</tr>
																												</table>
																												<![endif]-->
																											</td>
																										</tr>
																									</table>
																								</td>
																							</tr>
																						</table>
																					</div>
																				<!--[if mso]>
																			</td>
																		</tr>
																	</table>
																<![endif]-->
															</td>
														</tr>
													</tbody>	
												</table>
											</div>
										<!--[if mso]>
									</td>
								</tr>
							</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR BRANCHES ENDS -->
		
		<!-- OUR BRANCHES BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SECTION-2 -->
										<table align="center" border="0" bgcolor="#f6f6f6" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- OUR BRANCHES BOTTOM SPACE ENDING -->
		
		<!-- SUBSCRIBE STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="800">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG SUBSCRIBE -->
										<table align="center" bgcolor="#B1A684" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width: 600px;">
															<tr>
																<td align="center" valign="top" width="600">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:600px;">
																			<tr>
																				<td height="40" style="mso-line-height-rule: exactly; line-height:40px; font-size:0;">&nbsp;</td>
																			</tr>
																			<tr>
																				<td align="center">
																					<table align="center" border="0" cellspacing="0" cellpadding="0" width="95%">
																						<tr>
																							<td align="center">
																								<!--[if mso]>
																								<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																									<tr>
																										<td align="center" valign="top" width="390">
																											<![endif]-->
																											<div style="display:inline-block; width:100%; max-width:390px; vertical-align:top;" class="div-width">
																												<table align="left" border="0" cellspacing="0" cellpadding="0" class="display-width-child" width="100%" style="width:100%; max-width:100%;">
																													<tr>
																														<td align="left" style="padding:5px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:100%;">
																																<tr>
																																	<!-- ID:TXT SUBSCRIBE HEADING -->
																																	<td align="left" class="MsoNormal txt-center" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:20px; line-height:30px; letter-spacing:1px;">
																																		SIGNUP FOR NEWS AND OFFERS
																																	</td>
																																</tr>
																																<tr>
																																	<!-- ID:TXT SUBSCRIBE CONTENT -->
																																	<td align="left" class="MsoNormal txt-center" style="color:#f6f6f6; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:14px; line-height:24px; font-weight:300;">
																																		Lorem ipsum dolor sit amet elit ipsum
																																	</td>
																																</tr>
																															</table>
																														</td>
																													</tr>
																												</table>
																											</div>
																											<!--[if mso]>
																										</td>
																										<td align="center" valign="top" width="170">
																										<![endif]-->
																											<div style="display:inline-block; max-width:170px; vertical-align:top; width:100%;" class="div-width">
																												<!--TABLE RIGHT-->
																												<table align="right" border="0" cellspacing="0" cellpadding="0" class="display-width-child" width="100%">
																													<tr>
																														<td height="15" class="height20" style="mso-line-height-rule: exactly; line-height:15px; font-size:0;">&nbsp;</td>
																													</tr>
																													<!--[if mso]>
																													<tr>
																														<td height="5" style="line-height:5px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																													</tr>		
																													<![endif]-->
																													<tr>
																														<td align="left" style="padding:0 5px;">
																															<table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:100%;">
																																<tr>
																																   <td align="center" class="button-width">
																																		<!-- ID:BTN SUBSCRIBE BUTTON -->
																																		<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-button" style="border:1px solid #ffffff; border-radius:50px;">
																																			<tr>
																																				<td align="center" class="MsoNormal" style="color:#ffffff; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; padding:10px 16px; font-size:12px; letter-spacing:1px;">
																																					<a href="#" style="color:#ffffff; text-decoration:none;">SUBSCRIBE NOW</a>
																																				</td>
																																			</tr>
																																		</table>
																																	</td>
																																</tr>
																															</table>
																														</td>
																													</tr>
																												</table>
																											</div>
																											<!--[if mso]>
																										</td>
																									</tr>
																								</table>
																								<![endif]-->
																							</td>
																						</tr>
																					</table>
																				</td>
																			</tr>
																			<tr>
																				<td height="40" style="mso-line-height-rule: exactly; line-height:40px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
																	
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!-- SUBSCRIBE ENDS -->
		
		<!-- FOOTER TOP SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER TOP SPACE ENDING -->
		
		<!-- FOOTER STARTS -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																		<![endif]-->
																			<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																				<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
																					<tr>
																						<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="center">
																							<table align="center" border="0" class="display-width" cellpadding="0" cellspacing="0" width="100%">
																								<tr>
																									<td align="center" style="font-size:0;">
																										<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width:100%; max-width:100%;">
																											<tr>
																												<td align="center" style="border-collapse:collapse;">
																													<table align="center" border="0" cellpadding="0" width="100%" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:auto !important;">
																														<tbody>
																															<tr>
																																<!-- ID:TXT FOOTER ADDRESS -->
																																<td align="center" style="border-collapse:collapse; color:#333333;">
																																	<a href="#" style="color:#333333; text-decoration:none;">
																																		<img src="https://www.pennyblacktemplates.com/demo/emily/images/150x50.png" alt="150x50" width="150" height="50" style="margin:0; border:0; padding:0; display:block;"/>
																																	</a>
																																</td>
																															</tr>
																														</tbody>
																													</table>
																												</td>
																											</tr>
																											<tr>
																												<td height="15" style="mso-line-height-rule:exactly; line-height:15px; font-size:0;">&nbsp;</td>
																											</tr>
																										</table>
																										<!--[if mso]>
																										<table  aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="100%" style="width:100%;">
																											<tr>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE CENTER -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="left" style="padding:15px 5px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="footer-width" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																					<tr>
																																						<!-- ID:TXT FOOTER HEADING -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; letter-spacing:1px; line-height:28px; mso-line-height-rule: exactly;">
																																							PHONE &amp; EMAIL
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER PHONE -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; mso-line-height-rule: exactly; letter-spacing:1px;">	
																																							+012-345-6789
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="2" style="font-size:0; mso-line-height-rule:exactly; line-height:2px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER EMAIL -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; mso-line-height-rule: exactly; letter-spacing:1px;">	
																																							<a href="#" style="color:#666666; text-decoration:none;">info@domain.com</a>
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="2" style="font-size:0; mso-line-height-rule:exactly; line-height:2px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER EMAIL -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; mso-line-height-rule: exactly; letter-spacing:1px;">	
																																							<a href="#" style="color:#666666; text-decoration:none;">info@support.com</a>
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>	
																													
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE CENTER -->	
																														<table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="left" style="padding:15px 5px;"> 
																																	<table align="center" border="0" cellpadding="0" cellspacing="0" class="footer-width" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																					<tr>
																																						<!-- ID:TXT FOOTER HEADING -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; letter-spacing:1px; line-height:28px; mso-line-height-rule: exactly;">
																																							ADDRESS
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER ADDRESS -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; letter-spacing:1px;">	
																																							44, West Bridgeton Avenue, Brooklyn, Newyork - 33410.
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													
																													<!--[if mso]>
																												</td>
																												<td align="center" valign="top" width="195">
																													<![endif]-->
																													<div style="display:inline-block; max-width:195px; vertical-align:top; width:100%;" class="div-width">
																														<!-- TABLE RIGHT -->	
																														<table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%; width:100%;">
																															<tr>
																																<td align="center" style="padding:15px 5px;">
																																	<table align="center" border="0" cellpadding="0" class="footer-width" cellspacing="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; max-width:100%;">
																																		<tr>	
																																			<td align="left">
																																				<table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																																					<tr>
																																						<!-- ID:TXT FOOTER HEADING -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:500; font-size:18px; letter-spacing:1px; line-height:28px; mso-line-height-rule: exactly;">
																																							OPENING TIMES
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="5" style="font-size:0; mso-line-height-rule:exactly; line-height:5px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER DAY -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; letter-spacing:1px;">	
																																							Monday - Saturday<br/>8.00AM - 10.00PM
																																						</td>
																																					</tr>
																																					<tr>
																																						<td height="2" style="font-size:0; mso-line-height-rule:exactly; line-height:2px;">&nbsp;</td>
																																					</tr>
																																					<tr>
																																						<!-- ID:TXT FOOTER DAY -->
																																						<td align="left" class="MsoNormal txt-center" style="color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight:300; font-size:14px; line-height:24px; letter-spacing:1px;">	
																																							Sunday<br/>10.00AM - 3.00PM
																																						</td>
																																					</tr>
																																				</table>
																																			</td>
																																		</tr>
																																	</table>
																																</td>
																															</tr>
																														</table>
																													</div>
																													<!--[if mso]>
																												</td>
																											</tr>
																										</table>
																										<![endif]-->
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																					<tr>
																						<!-- ID:BR FOOTER BORDER -->
																						<td height="15" style="line-height:15px; mso-line-height-rule:exactly; border-bottom:1px solid #e5e5e5; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td height="30" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<!-- SOCIAL ICONS -->
																					<tr>
																						<td align="center">  
																							<table align="center" border="0" cellspacing="0" cellpadding="0" width="100%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
																								<tr>		
																									<td align="center">
																										<table align="center" border="0" cellspacing="0" cellpadding="0" style="width:auto !important;">
																											<tr>
																												<!-- ID:TXT FOOTER ADDRESS -->
																												<td align="left" width="48" valign="middle">
																													<a href="#" style="color:#666666;text-decoration:none;">
																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x7.png" alt="48x48x7" width="48" height="48" style="max-width:48px; width:100%; height:auto; margin:0; border:0; padding:0; display:block;" />
																													</a>
																												</td>
																												
																												<td width="20">&nbsp;</td>
																												
																												<td align="left" width="48" valign="middle">
																													<a href="#" style="color:#666666;text-decoration:none;">
																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x8.png" alt="48x48x8" width="48" height="48" style="max-width:48px; width:100%; height:auto; margin:0; border:0; padding:0; display:block;" />
																													</a>
																												</td>
																												<td width="20">&nbsp;</td>
																												
																												<td align="left" width="48" valign="middle">
																													<a href="#" style="color:#666666;text-decoration:none;">
																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x9.png" alt="48x48x9" width="48" height="48" style="max-width:48px; width:100%; height:auto; margin:0; border:0; padding:0; display:block;" />
																													</a>
																												</td>
																												<td width="20">&nbsp;</td>
																												
																												<td align="left" width="48" valign="middle">
																													<a href="#" style="color:#666666;text-decoration:none;">
																														<img src="https://www.pennyblacktemplates.com/demo/emily/images/48x48x10.png" alt="48x48x10" width="48" height="48" style="max-width:48px; width:100%; height:auto; margin:0; border:0; padding:0; display:block;" />
																													</a>
																												</td>
																											</tr>
																										</table>
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																					<tr>
																						<!-- ID:BR FOOTER BORDER -->
																						<td height="30" style="line-height:30px; mso-line-height-rule:exactly; border-bottom:1px solid #e5e5e5; font-size:0;"></td>
																					</tr>
																					<tr>
																						<td height="30" style="line-height:30px; mso-line-height-rule:exactly; font-size:0;">&nbsp;</td>
																					</tr>
																					<tr>
																						<td align="center" class="MsoNormal" style="padding:0 10px; color:#666666; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size:12px; font-weight:300; line-height:22px; letter-spacing:1px;">
																							<span class="txt-copyright unsub-width">&copy; All Rights Reserved </span> <span class="txt-copyright hide-bar"> | </span> <span class="txt-unsubscribe"> <a href="#" style="color:#666666; text-decoration:none;">Unsubscribe</a></span>
																						</td>
																					</tr>
																					<tr>
																						<td height="10" style="mso-line-height-rule:exactly; line-height:10px; font-size:0;">&nbsp;</td>
																					</tr>
																				</table>
																			</div>
																		<!--[if mso]>
																	</td>
																</tr>
															</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER ENDS -->
		
		<!-- FOOTER BOTTOM SPACE BEGINING -->
		<table align="center" bgcolor="#333333" border="0" cellpadding="0" cellspacing="0" width="100%">
			<tbody>
				<tr>
					<td align="center" style="font-size:0;">
						<!--[if mso]>
						<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="800" style="width: 800px;">
							<tr>
								<td align="center" valign="top" width="100%" style="max-width:800px;">
									<![endif]-->
									<div style="display:inline-block; width:100%; max-width:800px; vertical-align:top;" class="width800">
										<!-- ID:BG FOOTER -->
										<table align="center" border="0" bgcolor="#ffffff" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:800px;">
											<tbody>	
												<tr>
													<td align="center" class="padding">
														<!--[if mso]>
														<table aria-hidden="true" border="0" cellspacing="0" cellpadding="0" align="center" width="600" style="width:600px;">
															<tr>
																<td align="center">
																	<![endif]-->
																	<div style="display:inline-block; width:100%; max-width:600px; vertical-align:top;" class="main-width">
																		<table align="center" border="0" class="display-width-inner" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">	
																			<tr>
																				<td height="50" style="mso-line-height-rule:exactly; line-height:50px; font-size:0;">&nbsp;</td>
																			</tr>
																		</table>
																	</div>
																	<!--[if mso]>
																</td>
															</tr>
														</table>
														<![endif]-->
													</td>
												</tr>
											</tbody>	
										</table>
									</div>
									<!--[if mso]>
								</td>
							</tr>
						</table>
						<![endif]-->
					</td>
				</tr>					
			</tbody>	
		</table>
		<!-- FOOTER BOTTOM SPACE ENDING -->
		
	</body>
</html>`
}