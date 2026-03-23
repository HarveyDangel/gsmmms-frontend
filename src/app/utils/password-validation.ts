export function isPasswordMinimun( password: string ) {
	let pass = password;

	if (pass.length < 8) {
		return ('Password must be 8 character');
	} 
	return ('');
}

export function isPasswordMatched( password: string, password2: string) {
   let pass = password;
   let pass2 = password2;

   if (pass !== pass2) {
      return ('Password does not matched ');
   }
   return ('');
}

export function isPasswordClean( password: string) {
   let pass = password;

   if (pass) {
      return ('Password must not contain these <>/* symbols');
   }
   return ('');
}


