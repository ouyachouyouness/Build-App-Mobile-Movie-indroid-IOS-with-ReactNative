import React from 'react'
import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import propTypes from 'prop-types'

const defaultProps={
    main:false
}
const proptypes = {
    main: propTypes.bool,
}
class Navbar extends React.PureComponent {
    
    render() {
        const {navigation, main} = this.props;
        return (
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Icon name={'chevron-back'} size={40} color={'#fff'}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}


Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
export default Navbar;