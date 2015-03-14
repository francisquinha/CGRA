#ifdef GL_ES
precision highp float;
#endif

varying vec4 vFinalColor;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main() {
	vec4 textureColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = textureColor * vFinalColor;
}