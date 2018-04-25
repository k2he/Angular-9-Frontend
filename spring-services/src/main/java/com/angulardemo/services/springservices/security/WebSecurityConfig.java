package com.angulardemo.services.springservices.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.Http401AuthenticationEntryPoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private JwtTokenHandler jwtTokenHandler;
	
	@Autowired
	private JwtAuthenticationFilter authenticationFilter;
	
	@Autowired
	private JwtUserDetails userDetailsService;

	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService)
		        .passwordEncoder(passwordEncoder());
	}
	
	@Override
	  protected void configure(HttpSecurity http) throws Exception {
		
		// we use jwt so that we can disable csrf protection
        http.csrf().disable().cors().disable();

        http.exceptionHandling().and()
            .anonymous().and()
            .servletApi().and()
            .headers().cacheControl()
        ;

        http.authorizeRequests()
//                .antMatchers("/project, /contactus").hasRole(AUTHORIZED_ROLE)
//                .antMatchers("/contactus").hasRole(AUTHORIZED_ROLE)
                .anyRequest().permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new Http401AuthenticationEntryPoint("'Bearer token_type=\"JWT\"'"));

        http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
		
/*
	    // Disable CSRF (cross site request forgery)
	    http.csrf().disable().cors().disable();

	    // No session will be created or used by spring security
	    http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

	    // Entry points
	    http.authorizeRequests()
	    .anyRequest().permitAll()
//	        .antMatchers("*")
//	        .permitAll()
//	        .antMatchers("/users/signup").permitAll() //Haven't build this page yet
	        // Disallow everything else..
	        .anyRequest().authenticated();

	    // If a user try to access a resource without having enough permissions
	    http.exceptionHandling().authenticationEntryPoint(new Http401AuthenticationEntryPoint("'Bearer token_type=\"JWT\"'"));

	    // Apply JWT
	    http.apply(new JwtTokenFilterConfigurer(jwtTokenHandler));

	    // Optional, if you want to test the API from a browser
	    // http.httpBasic();
	     * *
	     */
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}

}
