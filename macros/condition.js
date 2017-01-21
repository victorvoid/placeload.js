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
macro undef$ {
	rule { } => {
		(void 0)
	}
}

export undef$;

macro isUndef$ {
	rule ( ($obj:expr) ) => {
		(typeof $obj === 'undefined')
	}

	rule infix { $obj:expr:: | () } => {
		(isUndef$($obj))
	}
}

export isUndef$;

macro isNotUndef$ {
	rule ( ($obj:expr) ) => {
		(typeof $obj !== 'undefined')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotUndef$($obj))
	}
}

export isNotUndef$;

macro isSet$ {
	rule ( ($obj:expr) ) => {
		(isNotUndef$($obj) && $obj !== null)
	}

	rule infix { $obj:expr:: | () } => {
		(isSet$($obj))
	}
}

macro isNull$ {
	rule ( ($obj:expr) ) => {
		(isNotUndef$($obj) && $obj === null)
	}

	rule infix { $obj:expr:: | () } => {
		(isNull$($obj))
	}
}

export isNull$;

macro isNotNull$ {
	rule ( ($obj:expr) ) => {
		(isUndef$($obj) || $obj !== null)
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNull$($obj))
	}
}

export isNotNull$;

macro isBoolean$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'boolean')
	}

	rule infix { $obj:expr:: | () } => {
		(isBoolean$($obj))
	}
}
export isBoolean$;

macro isString$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'string')
	}

	rule infix { $obj:expr:: | () } => {
		(isString$($obj))
	}
}
export isString$;

macro isNotString$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'string')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotString$($obj))
	}
}

export isNotString$;

macro isNumber$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'number')
	}

	rule infix { $obj:expr:: | () } => {
		(isNumber$($obj))
	}
}

export isNumber$;

macro isNotNumber$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'number')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNumber$($obj))
	}
}

macro isNumeric$ {
	rule { ($obj:expr) } => {
		(isNumber$($obj) && isFinite($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNumeric$($obj))
	}
}

export isNumeric$;

macro isNotNumeric$ {
	rule { ($obj:expr) } => {
		(isNotNumber$($obj) || !isFinite($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNotNumeric$($obj))
	}
}

export isNotNumeric$;

macro isRealNaN$ {
	rule { ($obj:expr) } => {
		(isNumber$($obj) && isNaN($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isRealNaN$($obj))
	}
}

export isRealNaN$;

macro isNotRealNaN$ {
	rule { ($obj:expr) } => {
		(isNotNumber$($obj) || !isNaN($obj))
	}

	rule infix { $obj:expr:: | () } => {
		(isNotRealNaN$($obj))
	}
}

export isNotRealNaN$;

macro isFunction$ {
	rule { ($obj:expr) } => {
		(typeof $obj === 'function')
	}

	rule infix { $obj:expr:: | () } => {
		(isFunction$($obj))
	}
}

export isFunction$;

macro isNotFunction$ {
	rule { ($obj:expr) } => {
		(typeof $obj !== 'function')
	}

	rule infix { $obj:expr:: | () } => {
		(isNotFunction$($obj))
	}
}

export isNotFunction$;

macro instanceof$ {
	rule { ($obj:expr, $constr:expr) } => {
		($obj instanceof $constr || $obj && $obj.constructor && $obj.constructor.name === $constr.name)
	}

	rule infix { $obj:expr:: | ($constr:expr) } => {
		(instanceof$($obj, $constr))
	}
}

export instanceof$;
