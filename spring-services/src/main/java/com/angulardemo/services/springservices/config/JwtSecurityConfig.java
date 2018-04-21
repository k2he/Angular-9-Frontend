package com.angulardemo.services.springservices.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.Http401AuthenticationEntryPoint;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.angulardemo.services.springservices.security.JwtAuthenticationFilter;

@EnableWebSecurity
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {

	public static final String AUTHORIZED_ROLE = "admin";
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtAuthenticationFilter authenticationFilter;
	
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
//                .antMatchers("/project").hasRole(AUTHORIZED_ROLE)
//                .antMatchers("/contactus").hasRole(AUTHORIZED_ROLE)
                .anyRequest().permitAll()
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(new Http401AuthenticationEntryPoint("'Bearer token_type=\"JWT\"'"));

        http.addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
    }
	
	/**
     * Prevent StatelessAuthenticationFilter will be added to Spring Boot filter chain.
     * Only Spring Security must use it.
     */
    @Bean
    public FilterRegistrationBean registration(JwtAuthenticationFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean(filter);
        registration.setEnabled(false);
        return registration;
    }
    
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.userDetailsService(userDetailsService)
//		        .passwordEncoder(encoder());
//	}
	
	@Bean
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }
	
//	private JWTAuthenticationEntryPoint entryPoint;
//	@Bean
//	@Override
//	public AuthenticationManager authenticationManager() {
//		return new ProviderManager(Collections.singletonList(authenticationProvider));
//	}
	
	
//	@Bean
//	public JWTAuthenticationFilter authenticationFilter() {
//		AuthenticationManager manager = authenticationManager();
//		JWTAuthenticationFilter filter = new JWTAuthenticationFilter(manager);
//		filter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
//		return filter;
//	}
//	
//	@Override
//    protected void configure(HttpSecurity http) throws Exception {
//		http.cors().and().csrf().disable();
//		http.authorizeRequests().antMatchers("**/project").authenticated()
//				.and()
//				.exceptionHandling().authenticationEntryPoint(entryPoint)
//				.and()
//				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//		http.addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class);
//		
//		http.headers().cacheControl();
//	}
}
