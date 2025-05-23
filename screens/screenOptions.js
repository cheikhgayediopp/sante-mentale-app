tabBarIcon: ({ color, size, focused }) => {
    const scale = useSharedValue(focused ? 1.2 : 1);
  
    useEffect(() => {
      scale.value = withSpring(focused ? 1.3 : 1); // petit rebond
    }, [focused]);
  
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }]
    }));
  
    let iconName;
    switch (route.name) {
      case "Accueil":
        iconName = "home-outline";
        break;
      case "Statistiques":
        iconName = "stats-chart";
        break;
      case "Quiz":
        iconName = "brain";
        break;
      case "Suivi":
        iconName = "journal-outline";
        break;
      case "Contact":
        iconName = "mail-outline";
        break;
      default:
        iconName = "ellipse";
    }
  
    const IconComponent =
      route.name === "Quiz" ? MaterialCommunityIcons : Ionicons;
  
    return (
      <Animated.View style={animatedStyle}>
        <IconComponent name={iconName} size={size} color={color} />
      </Animated.View>
    );
  }
  