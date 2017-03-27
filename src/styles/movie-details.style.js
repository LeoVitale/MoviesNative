const defaultText = {
  color: '#fff',
  backgroundColor: 'transparent',
}

export const movieDetailsStyles = {
  
  scrollView: {
    flex: 1,
    backgroundColor: '#000'
  },
  container: {
    flex: 1
  },
  heroPoster: {
    flex: 1,
  },
  backDropImage: {
    flex: 1,
    height: 250,
    opacity:0.8
  },
  metadata: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    ...defaultText,
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallTitle:{
     ...defaultText,
     opacity: 0.8
  },
  metadataContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight:16
  },
  points: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 30,
    left: 0,
    width: '100%',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: "bold"
  }
};