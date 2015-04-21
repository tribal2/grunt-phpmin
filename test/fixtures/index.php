<?php
  // We use composer's autoload.php
  require './vendor/autoload.php';
  
  $payload = array(
    "iss" => "http://this-is-not-a-comment.org",        // issuer
    "aud" => 'http://example.com#not_a_comment_either', // audience
    "iat" => 1356999524,                                // date of issuance
    "nbf" => 1357000000,                                // don't use token before date
    "exp" => time() + 30                                // token expiration date
  );
  
  /* This is a multiline comment example.
     The expiration date in the above token payload was set to 30 
     seconds from now. */
  
  // The key we will use to encode our payload data
  $key = "example_key_with_'single#quotes'";
  $key2 = 'example_key_with_"double//quotes"';
  
  # This is another type of PHP comment.
  $jwt = JWT::encode( $payload, $key ); # We encode our token using the
                                        # key provided above using the
                                        # awesome library PHP-JWT by firebase
  
  # We decode the token inmediately
  $decoded = JWT::decode( $jwt, $key, array('HS256') );
  var_dump($decoded);
?>

