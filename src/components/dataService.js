export function getCountry() {
    return [
        { category_name: 'Afghanistan', code: 'AF' }, { category_name: 'Åland Islands', code: 'AX' }, { category_name: 'Albania', code: 'AL' }, { category_name: 'Algeria', code: 'DZ' }, { category_name: 'American Samoa', code: 'AS' }, { category_name: 'AndorrA', code: 'AD' }, { category_name: 'Angola', code: 'AO' }, { category_name: 'Anguilla', code: 'AI' }, { category_name: 'Antarctica', code: 'AQ' }, { category_name: 'Antigua and Barbuda', code: 'AG' }, { category_name: 'Argentina', code: 'AR' }, { category_name: 'Armenia', code: 'AM' }, { category_name: 'Aruba', code: 'AW' }, { category_name: 'Australia', code: 'AU' }, { category_name: 'Austria', code: 'AT' }, { category_name: 'Azerbaijan', code: 'AZ' }, { category_name: 'Bahamas', code: 'BS' }, { category_name: 'Bahrain', code: 'BH' }, { category_name: 'Bangladesh', code: 'BD' }, { category_name: 'Barbados', code: 'BB' }, { category_name: 'Belarus', code: 'BY' }, { category_name: 'Belgium', code: 'BE' }, { category_name: 'Belize', code: 'BZ' }, { category_name: 'Benin', code: 'BJ' }, { category_name: 'Bermuda', code: 'BM' }, { category_name: 'Bhutan', code: 'BT' }, { category_name: 'Bolivia', code: 'BO' }, { category_name: 'Bosnia and Herzegovina', code: 'BA' }, { category_name: 'Botswana', code: 'BW' }, { category_name: 'Bouvet Island', code: 'BV' }, { category_name: 'Brazil', code: 'BR' }, { category_name: 'British Indian Ocean Territory', code: 'IO' }, { category_name: 'Brunei Darussalam', code: 'BN' }, { category_name: 'Bulgaria', code: 'BG' }, { category_name: 'Burkina Faso', code: 'BF' }, { category_name: 'Burundi', code: 'BI' }, { category_name: 'Cambodia', code: 'KH' }, { category_name: 'Cameroon', code: 'CM' }, { category_name: 'Canada', code: 'CA' }, { category_name: 'Cape Verde', code: 'CV' }, { category_name: 'Cayman Islands', code: 'KY' }, { category_name: 'Central African Republic', code: 'CF' }, { category_name: 'Chad', code: 'TD' }]
}

export function matchCountry(state, value) {
    // console.log(state);
    // console.log(value);
    return (
        state.category_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        state.code.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
}