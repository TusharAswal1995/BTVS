import React, {useEffect} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login} from 'actions/authActions';
import {useTheme} from '@react-navigation/native';
const Login = props => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.authReducer);

  useEffect(() => {
    dispatch(login());
  }, []);

  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
      }}></View>
  );
};
const makeStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors?.screenBackground,
    },
  });

export default Login;
