
import { Amplify } from 'aws-amplify';
import { JSX, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
 

Amplify.getConfig();

type CognitoUser = {
  attributes: {
    email: string;
  };
};

export default function AppContent(): JSX.Element {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const signIn = async (): Promise<void> => {
    try {
      await Auth.federatedSignIn();
    } catch (err) {
      setError('Sign in failed');
    }
  };

  const signOut = async (): Promise<void> => {
    await Auth.signOut();
    setUser(null);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (user) {
    return (
      <View style={styles.container}>
        <Text>Hello: {user.attributes.email}</Text>

        <Button title="Sign out" onPress={signOut} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={signIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});