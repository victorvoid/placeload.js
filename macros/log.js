macro puts {
	case { _ $x} => {
		return #{console.log($x)};
	}
}
export (puts)
