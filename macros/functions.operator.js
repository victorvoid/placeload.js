operator (|>) 1 left { $l, $r } => #{
  $r($l)
}

export (|>)


operator (->>) 18 right { $f, $g } => #{
  (function(a){ return $g($f(a)) });
}
export (->>)
