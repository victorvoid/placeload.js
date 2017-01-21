let if = macro {
  rule infix {
    return $body:expr | $predicate:expr
  } => {
    if ($predicate) {
      return $body;
    }
  }
  rule infix {
    $body:expr | $predicate:expr ;
  } => {
    if ($predicate) {
      $body;
    }
  }
  rule infix {
    $body:expr | $predicate:expr (;)
  } => {
    $body if $predicate
  }
  rule {} => { if }
}

export (if);


let unless = macro {
  rule infix { return $value:expr | $guard:expr } => {
    if (!($guard)) {
      return $value;
    }
  }
}
export (unless);
operator (|>) 1 left { $l, $r } => #{
  $r($l)
}

export (|>)


operator (->>) 18 right { $f, $g } => #{
  (function(a){ return $g($f(a)) });
}
export (->>)
macro puts {
	case { _ $x} => {
		return #{console.log($x)};
	}
}
export (puts)
