package com.hackforfun.coronatrackerbackend.controller;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CoronaTrackerController {

	@Autowired
	RestTemplate restTemplate;

	@RequestMapping(method=RequestMethod.GET,value = "/coronatracker/statisticsbycountry")
	   public String getStatisticsByCountry() {
	      HttpHeaders headers = new HttpHeaders();
	      headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	      HttpEntity <String> entity = new HttpEntity<String>(headers);
	      
	      return restTemplate.exchange("https://www.trackcorona.live/api/countries", HttpMethod.GET, entity, String.class).getBody();
	   }
}
